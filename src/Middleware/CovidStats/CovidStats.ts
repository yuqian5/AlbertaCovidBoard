export default class CovidStats {
    public static async GetDailyCaseCountByZone(zone : string){
        switch (zone) {
            case "Calgary Zone":
            case "Edmonton Zone":
            case "South Zone":
            case "North Zone":
                let query = `https://data.edmonton.ca/resource/jmcu-tz8y.json?$select=count(*), date_reported&$where=alberta_health_services_zone="${zone}"&$group=date_reported&$order=date_reported ASC`;
                let resp = await fetch(query);

                const result = {
                    id: zone,
                    color: "hsl(195, 70%, 50%)",
                    data: [] as object[]
                };

                // construct line data
                await resp.json().then(data => {
                    data.forEach((day: any) => {
                        result.data.push({x: day.date_reported.split('T')[0], y: day.count});
                    })
                });

                return result;
            default:
                throw new Error("Invalid Zone")
        }
    }

    public static async GetDailyCaseCountForAlberta(){
        let query = 'https://data.edmonton.ca/resource/jmcu-tz8y.json?$select=count(*), date_reported&$group=date_reported&$order=date_reported ASC';
        let resp = await fetch(query);

        const result = {
            id: "Alberta",
            color: "hsl(195, 70%, 50%)",
            data: [] as object[]
        };

        // construct line data
        await resp.json().then(data => {
            data.forEach((day: any) => {
                result.data.push({x: day.date_reported.split('T')[0], y: day.count});
            })
        });

        return result;
    }

    public static async GetRateOfNewHospitalizationsByZone(zone : string){
        switch (zone) {
            case "Calgary Zone":
            case "Edmonton Zone":
            case "South Zone":
            case "North Zone":
            case "Alberta":
            case "Central Zone":
                let query = `https://data.edmonton.ca/resource/5n6j-rw53.json?$select=Date, "${zone}"`;
                let resp =  await fetch(query);
                return resp.json();
            default:
                throw new Error("Invalid Zone")
        }
    }

    public static async GetCurrentVariantCasesByZone(zone : string){
        switch (zone) {
            case "Calgary Zone":
            case "Edmonton Zone":
            case "South Zone":
            case "North Zone":
            case "In Alberta":
            case "Central Zone":
            case "Unknown":
                let query = `https://data.edmonton.ca/resource/f7kx-redx.json?$where=zone="${zone}"&$order=date DESC&$limit=1`;
                let resp =  await fetch(query);
                return resp.json();
            default:
                throw new Error("Invalid Zone")
        }
    }

    public static async GetVariantCasesHistoryByZone(zone : string){
        switch (zone) {
            case "Calgary Zone":
            case "Edmonton Zone":
            case "South Zone":
            case "North Zone":
            case "In Alberta":
            case "Central Zone":
            case "Unknown":
                let query = `https://data.edmonton.ca/resource/f7kx-redx.json?$where=zone="${zone}"&$order=date ASC`;
                return await fetch(query);
            default:
                throw new Error("Invalid Zone")
        }
    }

    public static async GetCurrentRValueByZone(zone : string){
        switch (zone) {
            case "Calgary Zone":
            case "Edmonton Zone":
            case "Rest of Alberta":
            case "Alberta provincewide":
                let query = `https://data.edmonton.ca/resource/4vfx-e2qj.json?$where=location="${zone}"&$order=date_from DESC&$limit=1`;
                let resp =  await fetch(query);
                return await resp.json();
            default:
                throw new Error("Invalid Zone")
        }
    }

    public static async GetRValueHistoryByZone(zone : string){
        switch (zone) {
            case "Calgary Zone":
            case "Edmonton Zone":
            case "Rest of Alberta":
            case "Alberta provincewide":
                let query = `https://data.edmonton.ca/resource/4vfx-e2qj.json?$where=location="${zone}"&$order=date_from ASC`;
                let resp =  await fetch(query);

                const result = {
                    id: zone + "",
                    color: "hsl(195, 70%, 50%)",
                    data: [] as object[]
                };

                if (zone === "Alberta provincewide") {
                    result.id = "Alberta Province Wide";
                }

                // construct line data
                await resp.json().then(data => {
                    data.forEach((point: any) => {
                        result.data.push({x: point.date_from.split('T')[0], y: point.r_value});
                    })
                });

                return result;
            default:
                throw new Error("Invalid Zone")
        }
    }

    public static async GetCurrentOutbreakLocations(){
        let query = `https://data.edmonton.ca/resource/2h73-35uw.json`;
        return await fetch(query);
    }
}