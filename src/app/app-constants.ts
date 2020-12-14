export class AppConstants {

	public static get baseServidor(): string { return "http://localhost:8080/" }

	public static get baseLogin(): string { return this.baseServidor + "framespringrestapi/login"}

	public static get baseUrl(): string { return this.baseServidor + "framespringrestapi/usuario/"}
}
