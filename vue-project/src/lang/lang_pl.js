import sample from './text/sample_pl.json'
import error404 from './pages/errors/404_pl.json'
import menu from './pages/menu_pl.json'
import login from './auth/login_pl.json'
import reset from './auth/reset_pl.json'
import register from './auth/register_pl.json'
import activate from './auth/activate_pl.json'
import change_pass from './auth/change_pass_pl.json'
import panel from './panel/panel_pl.json'
import settings from './panel/settings_pl.json'
import messages from './panel/messages_pl.json'

const pl = {
	message: {
		back: 'Powrót',
		hello: 'witaj!',
		hello_capitalize: '@.capitalize:message.hello',
		axios_err_connection: 'Błąd połączenia',
	},
	menu: menu,
	text: sample,
	error404: error404,
	login: login,
	reset: reset,
	register: register,
	activate: activate,
	change_pass: change_pass,
	panel: panel,
	settings: settings,
	messages: messages,
}

export default pl
