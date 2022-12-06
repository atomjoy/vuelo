import sample from './text/sample_en.json'
import error404 from './pages/errors/404_en.json'
import menu from './pages/menu_en.json'
import login from './auth/login_en.json'
import reset from './auth/reset_en.json'
import register from './auth/register_en.json'
import activate from './auth/activate_en.json'
import change_pass from './auth/change_pass_en.json'
import panel from './panel/panel_en.json'
import settings from './panel/settings_en.json'
import messages from './panel/messages_en.json'

const en = {
	message: {
		back: 'Back',
		hello: 'hello',
		hello_capitalize: '@.capitalize:message.hello',
		axios_err_connection: 'Connection error',
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

export default en
