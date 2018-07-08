import axios from "./axios"

export function mock(){
	return axios.get("http://g.c")
		.then(res => {
			console.log(res,111)
		})
}
export function checkLogin() {
	return axios("/api/admin/checkLogin", {
		method: "GET",
		// data: {
		//   ...params,
		// },
	})
}
export function queryWeiguiJiankong(queryObj){
	console.log(queryObj)
	return axios("/api/fuseNonRealTime/queryWeiguiJiankong",{
		method:"POST",
		data:queryObj
	}).then(res => {
		console.log(res)
	})
}