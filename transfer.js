/** @param {NS} ns */
export async function main(ns) {
    let fileList =['reap.js','sap.js'];
    let target = ns.args[0];
    if (ns.hasRootAccess(target) && ns.getServerMaxRam(target) > 0) {
      for (var index = 0; index < fileList.length; index++) {
        ns.rm(fileList[index], target);
        ns.scp(fileList[index], target);
      }
    }
}