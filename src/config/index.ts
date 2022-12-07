import prodConfig from './prod.config';
import devConfig from './dev.config';

export interface DbConfig {
	uri: string;
}

export interface AdminConfig {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	password: string;
}

export interface JwtAuthConfig {
	secret: string;
	atExpires: number;
	rtExpires: number;
}

export interface AuthConfig {
	jwt: JwtAuthConfig;
	admin: AdminConfig;
}

export interface Config {
	db: DbConfig;
	auth: AuthConfig;
}

export default () => {
	let config: Config;
	if (process.env.NODE_ENV === 'production') {
		config = prodConfig;
	}
	config = devConfig;
	return config;
};
