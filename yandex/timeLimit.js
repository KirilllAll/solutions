function timeLimit(fn, t) {
    
	return async function(...args) {
			return new Promise((resolve, reject) => {
				let timer = setTimeout(() => {
				reject('"Time Limit Exceeded"')	
				}, t)

				fn.then((value) => {
					clearTimeout(timer);
					resolve(value);
				}).catch((e) => {
					clearTimeout(timer);
					reject(e);
				})



			})
	}
};
var timeLimit = function(fn, t) {
    
	return async function(...args) {
				 return new Promise((resolve, reject) => {
						 const timer = setTimeout(() => {
								 reject("Time Limit Exceeded")
						 }, t)
 
						 fn(...args)
								 .then((result) => {
										 clearTimeout(timer)
										 resolve(result)
								 })
								 .catch((err) => {
										 clearTimeout(timer)
										 reject(err)
								 })
				 })
		 }
 };