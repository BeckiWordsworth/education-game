export default {
	id: "CreateUserSchema",
	type: "object",
	description: "Create user request body",
	additionalProperties: false,
	properties: {
		username: {
			type: "string"
		},
		email: {
			type: "string"
		},
    password: {
			type: "string"
		}
	},
	required: ["username", "email", "password"]
};