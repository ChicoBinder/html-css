function updateModifiers() {
    //converter atributo em mod

    var ForAt = document.getElementById("ForAt").value;
    document.getElementById("ForMod").value = Math.floor((ForAt - 10)/2);

    var DesAt = document.getElementById("DesAt").value;
    document.getElementById("AgiMod").value = Math.floor((DesAt -10)/2);

    var AgiAt = document.getElementById("AgiAt").value;
    document.getElementById("DesMod").value = Math.floor((AgiAt -10)/2);
    
    var VigAt = document.getElementById("VigAt").value;
    document.getElementById("VigMod").value = Math.floor((VigAt -10)/2);

    var IntAt = document.getElementById("IntAt").value;
    document.getElementById("IntMod").value = Math.floor((IntAt -10)/2);

    var PerAt = document.getElementById("PerAt").value;
    document.getElementById("PerMod").value = Math.floor((PerAt -10)/2);

    var CorAt = document.getElementById("CorAt").value;
    document.getElementById("CorMod").value = Math.floor((CorAt -10)/2);

}

function updateAtual() {
    //converter atributo inicial para atual em caso de modificação
    
    var ForIni = document.getElementById("ForIni").value;
    document.getElementById("ForAt").value = ForIni;
    var DesIni = document.getElementById("DesIni").value;
    document.getElementById("DesAt").value = DesIni;
    var AgiIni = document.getElementById("AgiIni").value;
    document.getElementById("AgiAt").value = AgiIni;
    var VigIni = document.getElementById("VigIni").value;
    document.getElementById("VigAt").value = VigIni;
    var IntIni = document.getElementById("IntIni").value;
    document.getElementById("IntAt").value = IntIni;
    var PerIni = document.getElementById("PerIni").value;
    document.getElementById("PerAt").value = PerIni;
    var CorIni = document.getElementById("CorIni").value;
    document.getElementById("CorAt").value = CorIni;
}