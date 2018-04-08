declare var $: any;

export class NotificationUtil {

    public static success(message: string, from = 'top', align = 'right') {
        $.notify({
			icon: 'pe-7s-gift',
			message: message
		},{
			type: 'success',
			timer: 1000,
			placement: {
				from: from,
				align: align
			}
		});
	}
	
	public static error(message: string, from = 'top', align = 'right') {
        $.notify({
			icon: 'pe-7s-gift',
			message: message
		},{
			type: 'danger',
			timer: 1000,
			placement: {
				from: from,
				align: align
			}
		});
	}
	
	public static info(message: string, from = 'top', align = 'right') {
        $.notify({
			icon: 'pe-7s-gift',
			message: message
		},{
			type: 'info',
			timer: 1000,
			placement: {
				from: from,
				align: align
			}
		});
	}
	
	public static warning(message: string, from = 'top', align = 'right') {
        $.notify({
			icon: 'pe-7s-gift',
			message: message
		},{
			type: 'warning',
			timer: 1000,
			placement: {
				from: from,
				align: align
			}
		});
    }
}
