# Commvault

getVMinfo.js

for get VM info from http://hostname/webconsole/api/VM?status=0 use method GET. need set PageInfo value as "0,10000".

in "return el['name'] == (activity.getInput("vm"))" in "vm" need set your variable input. 

output - strGuid, slaCategoryDescription, clientName, SubName, clientId.
