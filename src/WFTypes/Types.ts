export type CoercionTypeClass = keyof typeof coercionTypesMap;

const coercionTypesMap = {
	WFContentItem: true,
	WFAppStoreAppContentItem: true,
	WFArticleContentItem: true,
	WFBooleanContentItem: true,
	WFContactContentItem: true,
	WFDateContentItem: true,
	WFTimeLengthContentItem: true,
	WFTimeContentItem: true,
	WFDictionaryContentItem: true,
	WFEmailAddressContentItem: true,
	WFGenericFileContentItem: true,
	WFImageContentItem: true,
	WFMPMediaContentItem: true,
	WFiTunesProductContentItem: true,
	WFLocationContentItem: true,
	WFDCMapsLinkContentItem: true,
	WFAVAssetContentItem: true,
	WFNumberContentItem: true,
	WFPDFContentItem: true,
	WFPhoneNumberContentItem: true,
	WFPhotoMediaContentItem: true,
	WFMKMapItemContentItem: true,
	WFRichTextContentItem: true,
	WFSafariWebPageContentItem: true,
	WFStringContentItem: true,
	WFURLContentItem: true,
	WFVCardContentItem: true,
	WFEnumerationContentItem: true,
	WFCalendarEventContentItem: true
};

export function isCoercionTypeClass(name: string): name is CoercionTypeClass {
	return !!coercionTypesMap[<CoercionTypeClass>name];
}

export type AggrandizementPropertyRawName =
	| "Content Rating"
	| "Release Date"
	| "# of Ratings (This Version)"
	| "Price"
	| "Supported Languages"
	| "iPad Screenshot URLs"
	| "Store URL"
	| "Version"
	| "Artist"
	| "Description"
	| "Supports Game Center"
	| "Formatted Price"
	| "Minimum OS Version"
	| "Currency Code"
	| "Screenshot URLs"
	| "Rating"
	| "Store ID"
	| "Category"
	| "Release Notes"
	| "Artwork"
	| "Artwork URL"
	| "Name"
	| "Rating (This Version)"
	| "Is Universal"
	| "Download Size"
	| "Last Updated"
	| "Supported Devices"
	| "# of Ratings"
	| "Title"
	| "Published Date"
	| "Author"
	| "Number of Words"
	| "Main Image URL"
	| "URL"
	| "Excerpt"
	| "Email Address"
	| "Phonetic First Name"
	| "Prefix"
	| "Nickname"
	| "Last Name"
	| "Phone Number"
	| "Has Photo"
	| "File Size"
	| "Creation Date"
	| "Last Modified Date"
	| "Middle Name"
	| "Company"
	| "Department"
	| "Contact Photo"
	| "First Name"
	| "Phonetic Last Name"
	| "File Extension"
	| "Street Address"
	| "Suffix"
	| "Job Title"
	| "Notes"
	| "Birthday"
	| "Group"
	| "Phonetic Middle Name"
	| "Values"
	| "Keys"
	| "Width"
	| "Time Taken"
	| "Is a Screenshot"
	| "Media Type"
	| "Height"
	| "Location"
	| "Orientation"
	| "Date Taken"
	| "Duration"
	| "Camera Make"
	| "Is Hidden"
	| "Frame Rate"
	| "Camera Model"
	| "Is Favorite"
	| "Album"
	| "Metadata Dictionary"
	| "Photo Type"
	| "Last Played Date"
	| "Genre"
	| "Media Kind"
	| "Composer"
	| "Disc #"
	| "Date Added"
	| "Play Count"
	| "Album Artwork"
	| "Album Track #"
	| "Has Album Artwork"
	| "Is Explicit"
	| "Comments"
	| "Skip Count"
	| "Lyrics"
	| "Is Cloud Item"
	| "Album Artist"
	| "Streamable"
	| "State"
	| "Altitude"
	| "Longitude"
	| "Country"
	| "City"
	| "Street"
	| "Latitude"
	| "ZIP Code"
	| "Page Contents"
	| "Page URL"
	| "Page Selection"
	| "Attendees"
	| "Calendar"
	| "Creation Date"
	| "Duration"
	| "File Extension"
	| "File Size"
	| "Has Alarms"
	| "Is All Day"
	| "Last Modified Date"
	| "Location"
	| "Name"
	| "Notes"
	| "Organizer"
	| "Start Date"
	| "Title"
	| "URL";

export type AggrandizementPropertyName = keyof typeof propertyNameMap;

export const propertyNameMap = {
	ofratingsthisversion: true,
	ofratings: true,
	albumartist: true,
	albumartwork: true,
	albumtrack: true,
	album: true,
	altitude: true,
	artist: true,
	artworkurl: true,
	artwork: true,
	author: true,
	birthday: true,
	cameramake: true,
	cameramodel: true,
	category: true,
	city: true,
	comments: true,
	company: true,
	composer: true,
	contactphoto: true,
	contentrating: true,
	country: true,
	creationdate: true,
	currencycode: true,
	dateadded: true,
	datetaken: true,
	department: true,
	description: true,
	disc: true,
	downloadsize: true,
	duration: true,
	emailaddress: true,
	excerpt: true,
	fileextension: true,
	filesize: true,
	firstname: true,
	formattedprice: true,
	framerate: true,
	genre: true,
	group: true,
	hasalbumartwork: true,
	hasphoto: true,
	height: true,
	ipadscreenshoturls: true,
	isascreenshot: true,
	isclouditem: true,
	isexplicit: true,
	isfavorite: true,
	ishidden: true,
	isuniversal: true,
	jobtitle: true,
	keys: true,
	lastmodifieddate: true,
	lastname: true,
	lastplayeddate: true,
	lastupdated: true,
	latitude: true,
	location: true,
	longitude: true,
	lyrics: true,
	mainimageurl: true,
	mediakind: true,
	mediatype: true,
	metadatadictionary: true,
	middlename: true,
	minimumosversion: true,
	name: true,
	nickname: true,
	notes: true,
	numberofwords: true,
	orientation: true,
	pagecontents: true,
	pageselection: true,
	pageurl: true,
	phonenumber: true,
	phoneticfirstname: true,
	phoneticlastname: true,
	phoneticmiddlename: true,
	phototype: true,
	playcount: true,
	prefix: true,
	price: true,
	publisheddate: true,
	ratingthisversion: true,
	rating: true,
	releasedate: true,
	releasenotes: true,
	screenshoturls: true,
	skipcount: true,
	state: true,
	storeid: true,
	storeurl: true,
	streamable: true,
	streetaddress: true,
	street: true,
	suffix: true,
	supporteddevices: true,
	supportedlanguages: true,
	supportsgamecenter: true,
	timetaken: true,
	title: true,
	url: true,
	values: true,
	version: true,
	width: true,
	zipcode: true,
	attendees: true,
	calendar: true,
	hasalarms: true,
	isallday: true,
	organizer: true,
	startdate: true
};

export function isAggrandizementPropertyName(
	name: string
): name is AggrandizementPropertyName {
	return !!propertyNameMap[<AggrandizementPropertyName>name];
}
