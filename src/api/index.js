const admin = {
	name: 'admin',
	password: '123'
};

export function askServer(user) {
	let promise = new Promise(function(resolve, reject) {
		setTimeout(function() {
			user.name === admin.name && user.password === admin.password ? resolve(admin) : reject('Login or password failed');
		}, 2000)
	});
	return promise;
}