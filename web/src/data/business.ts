// The one place for the business's name, address, phone, email and hours.
// Pages, the footer and structured data all read from here, so the details
// always match the Google Business Profile. This moves to a Sanity "site
// settings" document once the studio is set up.
// Values marked TBC are waiting on the client.

export const business = {
	name: 'We Care Car Repair',
	url: 'https://www.wecarecarrepair.co.uk',
	phone: 'TBC',
	email: 'TBC',
	whatsapp: 'TBC',
	address: {
		street: 'TBC',
		locality: 'Staverton Bridge',
		town: 'Cheltenham',
		postcode: 'GL51 6SX',
	},
	openingHours: [
		{ days: 'Monday to Friday', opens: '08:00', closes: '18:30' },
		{ days: 'Saturday', opens: '08:30', closes: '15:30' },
	],
	social: {
		facebook: 'TBC',
	},
} as const;

// Lets pages leave out a detail that is still TBC, rather than showing "TBC".
export const isConfirmed = (value: string) => value !== 'TBC';
