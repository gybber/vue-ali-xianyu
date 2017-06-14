import router from '@/router'
import {Toast} from 'mint-ui'
const DEFAULT_PATTERN = 'yyyy-MM-dd'
const SIGN_REGEXP = /([yMdhsm])(\1*)/g
function padding(s, len) {
    var len = len - (s + '').length
    for (var i = 0; i < len; i++) { s = '0' + s }
    return s
}
export default {
	comBack () {
		router.go(-1)
	},
	toast () {
		Toast('程序员姐姐还没来得及做这个功能呢！')
	},
	formatDate: {
		format: function(date, pattern) {
			pattern = pattern || DEFAULT_PATTERN;
			return pattern.replace(SIGN_REGEXP, function($0){
				switch($0.charAt(0)) {
					case 'y': return padding(date.getFullYear(),$0.length)
					case 'M': return padding(date.getMonth() + 1, $0.length)
                    case 'd': return padding(date.getDate(), $0.length)
                    case 'w': return date.getDay() + 1
                    case 'h': return padding(date.getHours(), $0.length)
                    case 'm': return padding(date.getMinutes(), $0.length)
                    case 's': return padding(date.getSeconds(), $0.length)

				}
			})
		}
	}
}