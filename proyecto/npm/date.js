module.exports = {
    sqlToObject: function(fechaRaw){
        let fechaString = fechaRaw.toISOString().split(/[- : T]/)
        let fecha = {
            dia: fechaString[2],
            mes: fechaString[1],
            año: fechaString[0],
            hora: fechaString[3],
            minuto: fechaString[4]
        }
        return fecha
    },
    numberToMonth: function(numero){
        var months = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
               "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ];
        return months[numero - 1]
    }
}