const sortFunction = (teamData) => {
  const points = Array.from(new Set(teamData.map((team) => team.points))).sort(
    (a, b) => b - a
  );
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
    new Array(points.length).fill(1).map(() => [])
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
        const aAwayGoals = aMatches.reduce((acc, curr) => {
          if (
            singleTeamKeys.includes(curr.teams[0]) &&
            singleTeamKeys.includes(curr.teams[1])
          ) {
            const index = curr.teams.indexOf(aTeam);
            return index === 1 ? acc + curr.goals[index] : acc;
          }
          return acc;
        }, 0);
        const bAwayGoals = aMatches.reduce((acc, curr) => {
          if (
            singleTeamKeys.includes(curr.teams[0]) &&
            singleTeamKeys.includes(curr.teams[1])
          ) {
            const index = curr.teams.indexOf(bTeam);
            return index === 1 ? acc + curr.goals[index] : acc;
          }
          return acc;
        }, 0);
        if (aPoints > bPoints) return -1;
        if (bPoints > aPoints) return +1;
        if (aGoalDifference > bGoalDifference) return -1;
        if (bGoalDifference > aGoalDifference) return +1;
        if (aGoals > bGoals) return -1;
        if (bGoals > aGoals) return +1;
        if (aAwayGoals > bAwayGoals) return -1;
        if (bAwayGoals > aAwayGoals) return +1;
        return 0;
      });
      teamsAfterDirectComparisonB.push(...sortedTeams);
    }
  });
  let teamsAfterDirectComparisonC = [];
  teamsAfterDirectComparisonB.forEach((team, index, array) => {
    if (index === 0) {
      teamsAfterDirectComparisonC.push({ ...team, rank: 1 });
    } else {
      const {
        team: currTeam,
        points: currPoints,
        goalDifference: currDiff,
        goals: currGoals,
        ownMatches: currOwnMatches
      } = team;
      const {
        team: prevTeam,
        points: prevPoints,
        goalDifference: prevDiff,
        goals: prevGoals
      } = array[index - 1];
      if (
        currPoints === prevPoints &&
        currDiff === prevDiff &&
        currGoals === prevGoals
      ) {
        const matchesAgainstPrevTeam = currOwnMatches.filter((match) =>
          match.teams.includes(prevTeam)
        );
        const ownPoints = matchesAgainstPrevTeam.reduce((acc, match) => {
          const matchIndex = match.teams.indexOf(currTeam);
          const otherIndex = matchIndex === 0 ? 1 : 0;
          const tGoals = match.goals[matchIndex];
          const cGoals = match.goals[otherIndex];
          if (tGoals > cGoals) return acc + 3;
          if (tGoals === cGoals) return acc + 1;
          return acc;
        }, 0);
        const otherPoints = matchesAgainstPrevTeam.reduce((acc, match) => {
          const matchIndex = match.teams.indexOf(prevTeam);
          const otherIndex = matchIndex === 0 ? 1 : 0;
          const tGoals = match.goals[matchIndex];
          const cGoals = match.goals[otherIndex];
          if (tGoals > cGoals) return acc + 3;
          if (tGoals === cGoals) return acc + 1;
          return acc;
        }, 0);
        const ownGoals = matchesAgainstPrevTeam.reduce((acc, match) => {
          const matchIndex = match.teams.indexOf(currTeam);
          return acc + match.goals[matchIndex];
        }, 0);
        const otherGoals = matchesAgainstPrevTeam.reduce((acc, match) => {
          const matchIndex = match.teams.indexOf(prevTeam);
          return acc + match.goals[matchIndex];
        }, 0);
        const ownDiff = ownGoals - otherGoals;
        const otherDiff = otherGoals - ownGoals;
        const ownAwayGoals = matchesAgainstPrevTeam.reduce((acc, match) => {
          const matchIndex = match.teams.indexOf(currTeam);
          if (matchIndex === 1) {
            return acc + match.goals[matchIndex];
          }
          return acc;
        }, 0);
        const otherAwayGoals = matchesAgainstPrevTeam.reduce((acc, match) => {
          const matchIndex = match.teams.indexOf(prevTeam);
          if (matchIndex === 1) {
            return acc + match.goals[matchIndex];
          }
          return acc;
        }, 0);
        if (otherPoints > ownPoints) {
          teamsAfterDirectComparisonC.push({ ...team, rank: index + 1 });
        } else if (otherDiff > ownDiff) {
          teamsAfterDirectComparisonC.push({ ...team, rank: index + 1 });
        } else if (otherGoals > ownGoals) {
          teamsAfterDirectComparisonC.push({ ...team, rank: index + 1 });
        } else if (otherAwayGoals > ownAwayGoals) {
          teamsAfterDirectComparisonC.push({ ...team, rank: index + 1 });
        } else {
          teamsAfterDirectComparisonC.push({
            ...team,
            rank: teamsAfterDirectComparisonC[
              teamsAfterDirectComparisonC.length - 1
            ].rank
          });
        }
      } else {
        teamsAfterDirectComparisonC.push({ ...team, rank: index + 1 });
      }
    }
  });
  return teamsAfterDirectComparisonC;
};

exports.makeTable = (matches) => {
  const teamsRaw = Object.keys(matches).reduce((acc, day) => {
    const dayTeams = matches[day].map((match) => match.teams).flat();
    const arr = acc.concat(dayTeams).flat();
    return arr;
  }, []);
  const teamsSet = new Set(teamsRaw);
  const teams = Array.from(teamsSet);
  const teamData = teams.map((team) => {
    const ownMatches = Object.values(matches).reduce((matchArray, day) => {
      const allTeamMatches = day.filter((match) => match.teams.includes(team));
      const playedTeamMatches = allTeamMatches.filter(
        (match) =>
          typeof match.goals[0] === "number" &&
          typeof match.goals[1] === "number"
      );
      if (playedTeamMatches.length > 0) {
        return matchArray.concat(playedTeamMatches);
      }
      return matchArray;
    }, []);
    const points = ownMatches.reduce((pointSum, match) => {
      const index = match.teams.indexOf(team);
      const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1;
      if (
        typeof match.goals[0] === "number" &&
        typeof match.goals[1] === "number"
      ) {
        if (match.goals[index] > match.goals[indexOp]) {
          return pointSum + 3;
        } else if (match.goals[index] === match.goals[indexOp]) {
          return pointSum + 1;
        }
        return pointSum;
      }
      return pointSum;
    }, 0);
    const omatches = ownMatches.length;
    const victories = ownMatches.reduce((vicSum, match) => {
      const index = match.teams.indexOf(team);
      const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1;
      if (match.goals[index] > match.goals[indexOp]) {
        return vicSum + 1;
      }
      return vicSum;
    }, 0);
    const ties = ownMatches.reduce((tieSum, match) => {
      const index = match.teams.indexOf(team);
      const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1;
      if (match.goals[index] === match.goals[indexOp]) {
        return tieSum + 1;
      }
      return tieSum;
    }, 0);
    const losses = ownMatches.reduce((lossSum, match) => {
      const index = match.teams.indexOf(team);
      const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1;
      if (match.goals[index] < match.goals[indexOp]) {
        return lossSum + 1;
      }
      return lossSum;
    }, 0);
    const goals = ownMatches.reduce((goalSum, match) => {
      const index = match.teams.indexOf(team);
      if (typeof match.goals[index] === "number") {
        return goalSum + match.goals[index];
      }
      return goalSum;
    }, 0);
    const countergoals = ownMatches.reduce((goalSum, match) => {
      const index = match.teams.indexOf(team);
      const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1;
      if (typeof match.goals[indexOp] === "number") {
        return goalSum + match.goals[indexOp];
      }
      return goalSum;
    }, 0);
    const goalDifference = goals - countergoals;
    const awayMatches = ownMatches.filter((match) => match.teams[1] === team);
    const awayGoals = awayMatches.reduce(
      (goalSum, match) => goalSum + match.goals[1],
      0
    );
    const live = ownMatches.reduce((acc, match) => {
      if (match.live) return true;
      if (acc === true) return true;
      return false;
    }, false);
    return {
      team,
      live,
      ownMatches,
      goals,
      countergoals,
      goalDifference,
      awayGoals,
      points,
      victories,
      ties,
      losses,
      matches: omatches
    };
  });
  const sortedTable = sortFunction(teamData);
  const totalTeams = sortedTable.length;
  const totalMatches = 2 * (totalTeams - 1);
  const maxPossiblePoints = sortedTable.map((team) => {
    const playedMatches = team.matches;
    const matchesToPlay = totalMatches - playedMatches;
    const minimalPoints = team.points;
    const maximalPoints = minimalPoints + 3 * matchesToPlay;
    return maximalPoints;
  });
  const bestRank = sortedTable.map((team, idx, arr) => {
    const newTable = arr.map((tm) => {
      if (tm.team === team.team) {
        return { ...tm, points: maxPossiblePoints[idx] };
      }
      return tm;
    });
    const newSortedTable = newTable.sort((a, b) => {
      if (a.points > b.points) return -1;
      if (b.points > a.points) return +1;
      if (a.team === team.team) return -1;
      if (b.team === team.team) return +1;
      return 0;
    });
    const teamRank = newSortedTable.findIndex((tm) => tm.team === team.team);
    return teamRank;
  });
  const worstRank = sortedTable.map((team, idx, arr) => {
    const newTable = arr.map((tm, ind) => {
      if (tm.team === team.team) return tm;
      return { ...tm, points: maxPossiblePoints[ind] };
    });
    const newSortedTable = newTable.sort((a, b) => {
      if (a.points > b.points) return -1;
      if (b.points > a.points) return +1;
      if (a.team === team.team) return +1;
      if (b.team === team.team) return -1;
      return 0;
    });
    const teamRank = newSortedTable.findIndex((tm) => tm.team === team.team);
    return teamRank;
  });
  const enhancedTable = sortedTable.map((team, index) => {
    return { ...team, best: bestRank[index], worst: worstRank[index] };
  });
  return enhancedTable;
};
