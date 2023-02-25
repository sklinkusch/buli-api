const sortFunction = (teamData) => {
  const pointsRaw = teamData.map(team => team.points)
  const points = Array.from(new Set(teamData.map((team) => team.points))).sort((a, b) => b - a)
  const pointsNumber = points.reduce((acc, curr) => {
    const obj = { ...acc };
    obj[curr] = teamData.reduce((iacc, icurr) => {
      let val = iacc;
      if (icurr.points === curr) val += 1;
      return val;
    }, 0);
    return obj;
  }, {});
  const tDataWithPointRanks = teamData.map((team, index, array) => {
    let rank = array.length;
    for (let a = 0; a <= team.points; a++) {
      rank -= pointsNumber[a] || 0;
    }
    rank += 1;
    return { ...team, rank };
  });
  const teamsPoints = tDataWithPointRanks.reduce(
    (acc, curr) => {
      const arr = [...acc];
      const ind = points.indexOf(curr.points);
      if (ind > -1 && ind < arr.length) arr[ind].push(curr);
      return arr;
    },
    new Array(points.length).fill(1).map((i) => [])
  );
  let teamsAfterOverallGoalDifference = [];
    teamsPoints.forEach((pointGroup) => {
      if (pointGroup.length === 1) {
        teamsAfterOverallGoalDifference.push(pointGroup);
      } else {
        const sortedPointGroup = pointGroup.sort(
          (a, b) => b.goalDifference - a.goalDifference
        );
        const goalDiffArray = Array.from(
          new Set(sortedPointGroup.map((team) => team.goalDifference))
        );
        goalDiffArray.forEach((diff) => {
          teamsAfterOverallGoalDifference.push(
            sortedPointGroup.filter((team) => team.goalDifference === diff)
          );
        });
      }
    });
    let teamsAfterOverallGoals = [];
    teamsAfterOverallGoalDifference.forEach((diffgroup) => {
      if (diffgroup.length === 1) {
        teamsAfterOverallGoals.push(diffgroup);
      } else {
        const sortedDiffgroup = diffgroup.sort((a, b) => b.goals - a.goals);
        const goalArray = Array.from(
          new Set(sortedDiffgroup.map((team) => team.goals))
        );
        goalArray.forEach((goal) => {
          teamsAfterOverallGoals.push(
            sortedDiffgroup.filter((team) => team.goals === goal)
          );
        });
      }
    });
    let teamsAfterDirectComparisonA = teamsAfterOverallGoals.slice();
    let teamsAfterDirectComparisonB = [];
    teamsAfterDirectComparisonA.forEach((singleTeam) => {
      if (singleTeam.length === 1) {
        teamsAfterDirectComparisonB.push(...singleTeam);
      } else {
        const sortedTeams = singleTeam.sort((a, b) => {
          const { ownMatches: aMatches, team: aTeam } = a;
          const { ownMatches: bMatches, team: bTeam } = b;
          const singleTeamKeys = singleTeam.map((t) => t.team);
          const aPoints = aMatches.reduce((acc, curr) => {
            const pts = acc;
            if (
              singleTeamKeys.includes(curr.teams[0]) &&
              singleTeamKeys.includes(curr.teams[1])
            ) {
              const index = curr.teams.indexOf(aTeam);
              const indexOp = index === 0 ? 1 : 0;
              return curr.goals[index] > curr.goals[indexOp]
                ? pts + 3
                : curr.goals[index] === curr.goals[indexOp]
                ? pts + 1
                : pts;
            }
            return pts;
          }, 0);
          const aGoalDifference = aMatches.reduce((acc, curr) => {
            if (
              singleTeamKeys.includes(curr.teams[0]) &&
              singleTeamKeys.includes(curr.teams[1])
            ) {
              const index = curr.teams.indexOf(aTeam);
              const indexOp = index === 0 ? 0 : 1;
              return acc + (curr.goals[index] - curr.goals[indexOp]);
            }
            return acc;
          }, 0);
          const aGoals = aMatches.reduce((acc, curr) => {
            if (
              singleTeamKeys.includes(curr.teams[0]) &&
              singleTeamKeys.includes(curr.teams[1])
            ) {
              const index = curr.teams.indexOf(aTeam);
              return acc + curr.goals[index];
            }
            return acc;
          }, 0);
          const bPoints = bMatches.reduce((acc, curr) => {
            const pts = acc;
            if (
              singleTeamKeys.includes(curr.teams[0]) &&
              singleTeamKeys.includes(curr.teams[1])
            ) {
              const index = curr.teams.indexOf(bTeam);
              const indexOp = index === 0 ? 1 : 0;
              return curr.goals[index] > curr.goals[indexOp]
                ? pts + 3
                : curr.goals[index] === curr.goals[indexOp]
                ? pts + 1
                : pts;
            }
            return pts;
          }, 0);
          const bGoalDifference = bMatches.reduce((acc, curr) => {
            if (
              singleTeamKeys.includes(curr.teams[0]) &&
              singleTeamKeys.includes(curr.teams[1])
            ) {
              const index = curr.teams.indexOf(bTeam);
              const indexOp = index === 0 ? 0 : 1;
              return acc + (curr.goals[index] - curr.goals[indexOp]);
            }
            return acc;
          }, 0);
          const bGoals = bMatches.reduce((acc, curr) => {
            if (
              singleTeamKeys.includes(curr.teams[0]) &&
              singleTeamKeys.includes(curr.teams[1])
            ) {
              const index = curr.teams.indexOf(bTeam);
              return acc + curr.goals[index];
            }
            return acc;
          }, 0);
          if (aPoints > bPoints) return -1;
          if (bPoints > aPoints) return +1;
          if (aGoalDifference > bGoalDifference) return -1;
          if (bGoalDifference > aGoalDifference) return +1;
          if (aGoals > bGoals) return -1;
          if (bGoals > aGoals) return +1;
          return 0;
        });
        teamsAfterDirectComparisonB.push(...sortedTeams);
      }
    });
    return teamsAfterDirectComparisonB;
}


exports.makeTable = (matches) => {
  const teamsRaw = Object.keys(matches).reduce((acc, day) => {
    const dayTeams = matches[day].map(match => match.teams).flat()
    const arr = acc.concat(dayTeams).flat()
    return arr
  },[])
  const teamsSet = new Set(teamsRaw);
  const teams = Array.from(teamsSet);
  const teamData = teams.map((team) => {
    const ownMatches = Object.values(matches).filter(day => {
      return day.filter(match => {
        return match.teams.includes(team) && typeof match.goals[0] === 'number' && typeof match.goals[1] === 'number'
      })
    }).flat()
    const points = ownMatches.reduce((pointSum, match) => {
      const index = match.teams.indexOf(team)
      const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1
      if (typeof match.goals[0] === 'number' && typeof match.goals[1] === 'number') {
        if (match.goals[index] > match.goals[indexOp]) {
          return pointSum + 3
        } else if (match.goals[index] === match.goals[indexOp]) {
          return pointSum + 1
        }
        return pointSum
      }
      return pointSum
    }, 0)
    const omatches = ownMatches.length
    const victories = ownMatches.reduce((vicSum, match) => {
      const index = match.teams.indexOf(team)
      const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1
      if (match.goals[index] > match.goals[indexOp]) {
        return vicSum + 1
      }
      return vicSum
    }, 0)
    const ties = ownMatches.reduce((tieSum, match) => {
      const index = match.teams.indexOf(team)
      const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1
      if (match.goals[index] === match.goals[indexOp]) {
        return tieSum + 1
      }
      return tieSum
    }, 0)
    const losses = ownMatches.reduce((lossSum, match) => {
      const index = match.teams.indexOf(team)
      const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1
      if (match.goals[index] < match.goals[indexOp]) {
        return lossSum + 1
      }
      return lossSum
    }, 0)
    const goals = ownMatches.reduce((goalSum, match) => {
      const index = match.teams.indexOf(team)
      if (typeof match.goals[index] === 'number') {
        return goalSum + match.goals[index]
      }
      return goalSum
    }, 0)
    const countergoals = ownMatches.reduce((goalSum, match) => {
      const index = match.teams.indexOf(team)
      const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1
      if (typeof match.goals[indexOp] === 'number') {
        return goalSum + match.goals[indexOp]
      }
      return goalSum
    }, 0)
    const goalDifference = goals - countergoals
    const awayMatches = ownMatches.filter(match => match.teams[1] === team)
    const awayGoals = awayMatches.reduce((goalSum, match) => goalSum + match.goals[1], 0)
    return { team, ownMatches, goals, countergoals, goalDifference, awayGoals, points, victories, ties, losses, matches: omatches }
  })
  const sortedTable = sortFunction(teamData)
  return sortedTable
}