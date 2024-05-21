/** @param {NS} ns */
export async function main(ns) {
    let serversFound = [];
    let serversPurch = ns.getPurchasedServers();
    ns.tail();
  
    /* @param none
     @return String[] of servers found through scan*/
    function crawler() {
      var lastscan = [];
      var serverList = ns.scan("home");
      for (var index = 0; index < serverList.length; index++) {
        var serverScan = ns.scan(serverList[index]);
        for (var jndex = 0; jndex < serverScan.length; jndex++) {
          if (serverList.includes(serverScan[jndex]) == false) {
            serverList.push(serverScan[jndex]);
          }
          if (lastscan.includes(serverScan[jndex]) == false) {
            lastscan = serverScan;
          }
        }
      }
      serversFound = serverList;
      ns.print(serversFound);
      return serversFound;
    }
    /*@Param: String server name 
      @return: none*/
    function penatrate(servName) {
      if (servName != "home" || serversPurch.includes(servName) == false) {
        ns.run("pentest.js", { threads: 1 }, servName)
        if (ns.hasRootAccess(servName) == true) {
        //remove servers with rootaccess from the array
          let remove = serversFound.indexOf(servName);
          serversFound.splice(remove, 1);
        }
      }
    }
  
    crawler();
    //we will continue going through the array until all servers have been rooted
    do {
      for (var pos = 0; pos < serversFound.length; pos++) {
        penatrate(serversFound[pos]);
        await ns.sleep(500);
      }
    }
    while (serversFound.length >= 1)
}