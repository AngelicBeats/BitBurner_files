/* @param {NS} ns, threads:?, (String) target name */
export async function main(ns) {
    let target = ns.args[0];
    let moneyThresh = ns.getServerMaxMoney(target);
    let currentMoney = ns.getServerMoneyAvailable(target);
    do {
    //grow available money on server until 50% of threshold is reached
      if (currentMoney >= moneyThresh * .50) {
        await ns.hack(target);
      }
      else {
        await ns.grow(target);
      }
    }
    while (ns.hasRootAccess(target))
  }