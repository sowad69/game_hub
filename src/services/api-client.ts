import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"dd567b7950794ce081f5424d2e787445"
    }
})