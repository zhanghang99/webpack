const user = require("./mock/api")
const proxy = {
	"GET /api/admin/checkLogin": (req, res) => {
		res.send({
			succ: "ok",
			result: {
				userName: "0137105900",
			},
		})
	},
	"POST /api/fuseNonRealTime/queryWeiguiJiankong": (req, res) => {
		console.log(user)
		res.send({
			succ: "ok",
			result: user.user,
		})
	},
}

module.exports = proxy