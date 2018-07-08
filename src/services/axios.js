import axios from "axios"

axios.defaults.timeout = 60000
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"

export default axios