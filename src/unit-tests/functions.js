module.exports = {
    appliedOrNot2(arr, id){
        let found = arr.findIndex(job => {
            return id == job.job_id
        })
        return found
    },
    organizeDate(job){
        let semiFinalDate = []
        let splitStamp = job.stamp.split('T')
        let withoutDashes = splitStamp[0].split('-')
        semiFinalDate.push(withoutDashes[1], withoutDashes[2], withoutDashes[0])
        let finalDate = semiFinalDate.join('-')
        return finalDate
    },
    convos2(arr){
        let cConvos = arr;
        let nConvo = []
        for(let i = 0; i<cConvos.length;i++){
            if(cConvos[i]!=null){
                nConvo.push(cConvos[i])
            } 
        }
        return nConvo
    }
}