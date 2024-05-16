/*Functions for gaining root access to a node */
/** @param {NS} ns */
export async function rooting(ns, target = 'home', ports) {
    exeCheck();
    /*@Param: none
      @Return: none or error*/
    function exeCheck() {
      let filesOnSystem = [];
      if (ns.fileExists('brutessh.exe')) { filesOnSystem.push['brutessh.exe']; }
      if (ns.fileExists('ftpcrack.exe')) { filesOnSystem.push['ftpcrack.exe']; }
      if (ns.fileExists('httpworm.exe')) { filesOnSystem.push['httpworm.exe']; }
      if (ns.fileExists('relaysmtp.exe')) { filesOnSystem.push['relaysmtp.exe']; }
      if (ns.fileExists('sqlinject.exe')) { filesOnSystem.push['sqlinject.exe']; }
      if (filesOnSystem.length < ports) { return 'error' }
      else {
        switch (ports) {
          case 1:
            ns.brutessh(target);
            ns.nuke(target);
            break;
          case 2:
            ns.brutessh(target);
            ns.ftpcrack(target);
            ns.nuke(target);
            break;
          case 3:
            ns.brutessh(target);
            ns.ftpcrack(target);
            ns.httpworm(target);
            ns.nuke(target);
            break;
          case 4:
            ns.brutessh(target);
            ns.ftpcrack(target);
            ns.httpworm(target);
            ns.relaysmtp(target);
            ns.nuke(target);
            break;
          case 5:
            ns.brutessh(target);
            ns.ftpcrack(target);
            ns.httpworm(target);
            ns.relaysmtp(target);
            ns.sqlinject(target);
            ns.nuke(target);
            break;
          default:
            ns.nuke(target);
            break;
        }
      }
    }
  }