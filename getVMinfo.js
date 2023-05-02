var jso = JSON.parse(activity.output);
var vmItems = jso['vmStatusInfoList'];
const result = vmItems.find(function(el){
    return el['name'] == (activity.getInput("vm"));
});

let clientName = '';
if('pseudoClient' in result){
    if('clientName' in result['pseudoClient']){
//        clientName = result['pseudoClient']['clientName'];
          clientName = result.pseudoClient.clientName;
    }
}

// SubclientName
let SubName = '';
if('subclientName' in result){
//    if('clientName' in result['pseudoClient']){
//        clientName = result['pseudoClient']['clientName'];
          SubName = result.subclientName;
    }
//}
// end SubclientName

// get strGUID
let strGUID = '';
if('strGUID' in result){
//    if('clientName' in result['pseudoClient']){
//        clientName = result['pseudoClient']['clientName'];
          strGUID = result.strGUID;
    }
// end strGUID

// get PROTECTED
let slaCategoryDescription = '';
if('slaCategoryDescription' in result){
//    if('clientName' in result['pseudoClient']){
//        clientName = result['pseudoClient']['clientName'];
          slaCategoryDescription = result.slaCategoryDescription;
    }
// get PROTECTED

// get ClientID
let clientId = '';
if('client' in result){
    if('clientId' in result['client']){
//        clientName = result['pseudoClient']['clientName'];
          clientId = result.client.clientId;
    }
}
// get ClientID

//workflow.setVariable("slaCategoryDescription", slaCategoryDescription);
activity.setOutput("slaCategoryDescription", slaCategoryDescription);
//workflow.setVariable("clientName", clientName);
activity.setOutput("clientName", clientName);
//workflow.setVariable("SubName", SubName);
activity.setOutput("SubName", SubName);
//workflow.setVariable("strGUID", strGUID);
activity.setOutput("strGUID", strGUID);
// workflow.setVariable("clientId", clientId);
activity.setOutput("clientId", clientId);
