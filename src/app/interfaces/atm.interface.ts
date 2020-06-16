//Interface Data of Atms Json
export interface Atm {
    address:{
            street:string,
            houseNumber:string,
            city:string,
            geoLocation:{
                lat:string,
                lng:string
            }
        },
    distance:number, 
    type:string,
}