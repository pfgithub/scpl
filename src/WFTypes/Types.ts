export type CoercionTypeClass =
	| "WFContentItem"
	| "WFAppStoreAppContentItem"
	| "WFArticleContentItem"
	| "WFBooleanContentItem"
	| "WFContactContentItem"
	| "WFDateContentItem"
	| "WFTimeLengthContentItem"
	| "WFTimeContentItem"
	| "WFDictionaryContentItem"
	| "WFEmailAddressContentItem"
	| "WFGenericFileContentItem"
	| "WFImageContentItem"
	| "WFMPMediaContentItem"
	| "WFiTunesProductContentItem"
	| "WFLocationContentItem"
	| "WFDCMapsLinkContentItem"
	| "WFAVAssetContentItem"
	| "WFNumberContentItem"
	| "WFPDFContentItem"
	| "WFPhoneNumberContentItem"
	| "WFPhotoMediaContentItem"
	| "WFMKMapItemContentItem"
	| "WFRichTextContentItem"
	| "WFSafariWebPageContentItem"
	| "WFStringContentItem"
	| "WFURLContentItem"
	| "WFVCardContentItem"
	| "WFEnumerationContentItem";

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
	WFEnumerationContentItem: true
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
	| "[object Object]"
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
	| "Page Selection";

export type AggrandizementPropertyName =
	| "ofratingsthisversion"
	| "ofratings"
	| "albumartist"
	| "albumartwork"
	| "albumtrack"
	| "album"
	| "altitude"
	| "artist"
	| "artworkurl"
	| "artwork"
	| "author"
	| "birthday"
	| "cameramake"
	| "cameramodel"
	| "category"
	| "city"
	| "comments"
	| "company"
	| "composer"
	| "contactphoto"
	| "contentrating"
	| "country"
	| "creationdate"
	| "currencycode"
	| "dateadded"
	| "datetaken"
	| "department"
	| "description"
	| "disc"
	| "downloadsize"
	| "duration"
	| "emailaddress"
	| "excerpt"
	| "fileextension"
	| "filesize"
	| "firstname"
	| "formattedprice"
	| "framerate"
	| "genre"
	| "group"
	| "hasalbumartwork"
	| "hasphoto"
	| "height"
	| "ipadscreenshoturls"
	| "isascreenshot"
	| "isclouditem"
	| "isexplicit"
	| "isfavorite"
	| "ishidden"
	| "isuniversal"
	| "jobtitle"
	| "keys"
	| "lastmodifieddate"
	| "lastname"
	| "lastplayeddate"
	| "lastupdated"
	| "latitude"
	| "location"
	| "longitude"
	| "lyrics"
	| "mainimageurl"
	| "mediakind"
	| "mediatype"
	| "metadatadictionary"
	| "middlename"
	| "minimumosversion"
	| "name"
	| "nickname"
	| "notes"
	| "numberofwords"
	| "orientation"
	| "pagecontents"
	| "pageselection"
	| "pageurl"
	| "phonenumber"
	| "phoneticfirstname"
	| "phoneticlastname"
	| "phoneticmiddlename"
	| "phototype"
	| "playcount"
	| "prefix"
	| "price"
	| "publisheddate"
	| "ratingthisversion"
	| "rating"
	| "releasedate"
	| "releasenotes"
	| "screenshoturls"
	| "skipcount"
	| "state"
	| "storeid"
	| "storeurl"
	| "streamable"
	| "streetaddress"
	| "street"
	| "suffix"
	| "supporteddevices"
	| "supportedlanguages"
	| "supportsgamecenter"
	| "timetaken"
	| "title"
	| "url"
	| "values"
	| "version"
	| "width"
	| "zipcode";

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
	zipcode: true
};

export function isAggrandizementPropertyName(
	name: string
): name is AggrandizementPropertyName {
	return !!propertyNameMap[<AggrandizementPropertyName>name];
}
