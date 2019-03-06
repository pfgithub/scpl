import {CoercionTypeClass, AggrandizementPropertyName} from "../WFTypes/Types";



type GetTypesData =  {[Type in CoercionTypeClass]: {[Name in AggrandizementPropertyName]: {name: string, data?: string|number} | undefined}};

const data: GetTypesData = {
	WFAppStoreAppContentItem: {
		contentrating: {
			name: "Content Rating"
		},
		releasedate: {
			name: "Release Date"
		},
		ofratingsthisversion: {
			name: "# of Ratings (This Version)"
		},
		price: {
			name: "Price"
		},
		supportedlanguages: {
			name: "Supported Languages"
		},
		ipadscreenshoturls: {
			name: "iPad Screenshot URLs"
		},
		storeurl: {
			name: "Store URL"
		},
		version: {
			name: "Version"
		},
		artist: {
			name: "Artist"
		},
		description: {
			name: "Description"
		},
		supportsgamecenter: {
			name: "Supports Game Center"
		},
		formattedprice: {
			name: "Formatted Price"
		},
		minimumosversion: {
			name: "Minimum OS Version"
		},
		currencycode: {
			name: "Currency Code"
		},
		screenshoturls: {
			name: "Screenshot URLs"
		},
		rating: {
			name: "Rating"
		},
		storeid: {
			name: "Store ID"
		},
		category: {
			name: "Category"
		},
		releasenotes: {
			name: "Release Notes"
		},
		artwork: {
			name: "Artwork"
		},
		artworkurl: {
			name: "Artwork URL"
		},
		name: {
			name: "Name",
			data: "WFItemName"
		},
		ratingthisversion: {
			name: "Rating (This Version)"
		},
		isuniversal: {
			name: "Is Universal"
		},
		downloadsize: {
			name: "Download Size"
		},
		lastupdated: {
			name: "Last Updated"
		},
		supporteddevices: {
			name: "Supported Devices"
		},
		ofratings: {
			name: "# of Ratings"
		}
	},
	WFArticleContentItem: {
		name: {
			name: "Name",
			data: "WFItemName"
		},
		title: {
			name: "Title"
		},
		publisheddate: {
			name: "Published Date"
		},
		author: {
			name: "Author"
		},
		numberofwords: {
			name: "Number of Words"
		},
		mainimageurl: {
			name: "Main Image URL"
		},
		url: {
			name: "URL"
		},
		excerpt: {
			name: "Excerpt"
		}
	},
	WFBooleanContentItem: {
		name: {
			name: "Name",
			data: "WFItemName"
		}
	},
	WFContactContentItem: {
		emailaddress: {
			name: "Email Address",
			data: 4
		},
		phoneticfirstname: {
			name: "Phonetic First Name",
			data: 7
		},
		prefix: {
			name: "Prefix",
			data: 20
		},
		url: {
			name: "URL",
			data: 22
		},
		nickname: {
			name: "Nickname",
			data: 19
		},
		lastname: {
			name: "Last Name",
			data: 1
		},
		phonenumber: {
			name: "Phone Number",
			data: 3
		},
		hasphoto: {
			name: "Has Photo",
			data: "18446744073709550615"
		},
		filesize: {
			name: "File Size",
			data: "WFFileSizeProperty"
		},
		creationdate: {
			name: "Creation Date",
			data: "WFFileCreationDate"
		},
		lastmodifieddate: {
			name: "Last Modified Date",
			data: "WFFileModificationDate"
		},
		middlename: {
			name: "Middle Name",
			data: 6
		},
		company: {
			name: "Company",
			data: 10
		},
		department: {
			name: "Department",
			data: 11
		},
		name: {
			name: "Name",
			data: "WFItemName"
		},
		contactphoto: {
			name: "Contact Photo",
			data: "18446744073709550616"
		},
		firstname: {
			name: "First Name",
			data: 0
		},
		phoneticlastname: {
			name: "Phonetic Last Name",
			data: 9
		},
		fileextension: {
			name: "File Extension",
			data: "WFFileExtensionProperty"
		},
		streetaddress: {
			name: "Street Address",
			data: 5
		},
		suffix: {
			name: "Suffix",
			data: 21
		},
		jobtitle: {
			name: "Job Title",
			data: 18
		},
		notes: {
			name: "Notes",
			data: 14
		},
		birthday: {
			name: "Birthday",
			data: 17
		},
		group: {
			name: "Group",
			data: "WFContactItemGroupProperty"
		},
		phoneticmiddlename: {
			name: "Phonetic Middle Name",
			data: 8
		}
	},
	WFDateContentItem: {
		name: {
			name: "Name",
			data: "WFItemName"
		}
	},
	WFDictionaryContentItem: {
		creationdate: {
			name: "Creation Date",
			data: "WFFileCreationDate"
		},
		values: {
			name: "Values"
		},
		lastmodifieddate: {
			name: "Last Modified Date",
			data: "WFFileModificationDate"
		},
		filesize: {
			name: "File Size",
			data: "WFFileSizeProperty"
		},
		name: {
			name: "Name",
			data: "WFItemName"
		},
		fileextension: {
			name: "File Extension",
			data: "WFFileExtensionProperty"
		},
		keys: {
			name: "Keys"
		}
	},
	WFEmailAddressContentItem: {
		name: {
			name: "Name",
			data: "WFItemName"
		}
	},
	WFGenericFileContentItem: {
		creationdate: {
			name: "Creation Date",
			data: "WFFileCreationDate"
		},
		filesize: {
			name: "File Size",
			data: "WFFileSizeProperty"
		},
		fileextension: {
			name: "File Extension",
			data: "WFFileExtensionProperty"
		},
		lastmodifieddate: {
			name: "Last Modified Date",
			data: "WFFileModificationDate"
		}
	},
	WFImageContentItem: {
		width: {
			name: "Width"
		},
		timetaken: {
			name: "Time Taken"
		},
		isascreenshot: {
			name: "Is a Screenshot"
		},
		mediatype: {
			name: "Media Type"
		},
		height: {
			name: "Height"
		},
		location: {
			name: "Location"
		},
		orientation: {
			name: "Orientation"
		},
		datetaken: {
			name: "Date Taken"
		},
		duration: {
			name: "Duration"
		},
		cameramake: {
			name: "Camera Make"
		},
		ishidden: {
			name: "Is Hidden"
		},
		framerate: {
			name: "Frame Rate"
		},
		fileextension: {
			name: "File Extension",
			data: "WFFileExtensionProperty"
		},
		cameramodel: {
			name: "Camera Model"
		},
		isfavorite: {
			name: "Is Favorite"
		},
		creationdate: {
			name: "Creation Date",
			data: "WFFileCreationDate"
		},
		album: {
			name: "Album"
		},
		metadatadictionary: {
			name: "Metadata Dictionary"
		},
		filesize: {
			name: "File Size",
			data: "WFFileSizeProperty"
		},
		phototype: {
			name: "Photo Type"
		},
		lastmodifieddate: {
			name: "Last Modified Date",
			data: "WFFileModificationDate"
		}
	},
	WFMPMediaContentItem: {
		lastplayeddate: {
			name: "Last Played Date",
			data: "lastPlayedDate"
		},
		fileextension: {
			name: "File Extension",
			data: "WFFileExtensionProperty"
		},
		releasedate: {
			name: "Release Date",
			data: "releaseDate"
		},
		genre: {
			name: "Genre",
			data: "genre"
		},
		mediakind: {
			name: "Media Kind",
			data: "mediaType"
		},
		name: {
			name: "Name",
			data: "WFItemName"
		},
		artist: {
			name: "Artist",
			data: "artist"
		},
		creationdate: {
			name: "Creation Date",
			data: "WFFileCreationDate"
		},
		composer: {
			name: "Composer",
			data: "composer"
		},
		duration: {
			name: "Duration",
			data: "playbackDuration"
		},
		disc: {
			name: "Disc #",
			data: "discNumber"
		},
		lastmodifieddate: {
			name: "Last Modified Date",
			data: "WFFileModificationDate"
		},
		dateadded: {
			name: "Date Added",
			data: "dateAdded"
		},
		playcount: {
			name: "Play Count",
			data: "playCount"
		},
		albumartwork: {
			name: "Album Artwork",
			data: "artwork"
		},
		albumtrack: {
			name: "Album Track #",
			data: "albumTrackNumber"
		},
		hasalbumartwork: {
			name: "Has Album Artwork"
		},
		rating: {
			name: "Rating",
			data: "rating"
		},
		isexplicit: {
			name: "Is Explicit",
			data: "isExplicit"
		},
		comments: {
			name: "Comments",
			data: "comments"
		},
		skipcount: {
			name: "Skip Count",
			data: "skipCount"
		},
		filesize: {
			name: "File Size",
			data: "WFFileSizeProperty"
		},
		lyrics: {
			name: "Lyrics",
			data: "lyrics"
		},
		isclouditem: {
			name: "Is Cloud Item",
			data: "isCloudItem"
		},
		albumartist: {
			name: "Album Artist",
			data: "albumArtist"
		},
		album: {
			name: "Album",
			data: "albumTitle"
		}
	},
	WFiTunesProductContentItem: {
		currencycode: {
			name: "Currency Code"
		},
		isexplicit: {
			name: "Is Explicit"
		},
		genre: {
			name: "Genre"
		},
		storeurl: {
			name: "Store URL"
		},
		name: {
			name: "Name",
			data: "WFItemName"
		},
		releasedate: {
			name: "Release Date"
		},
		price: {
			name: "Price"
		},
		artworkurl: {
			name: "Artwork URL"
		},
		streamable: {
			name: "Streamable"
		},
		storeid: {
			name: "Store ID"
		},
		artist: {
			name: "Artist"
		},
		formattedprice: {
			name: "Formatted Price"
		},
		artwork: {
			name: "Artwork"
		},
		description: {
			name: "Description"
		},
		duration: {
			name: "Duration"
		}
	},
	WFLocationContentItem: {
		phonenumber: {
			name: "Phone Number"
		},
		state: {
			name: "State",
			data: "state"
		},
		altitude: {
			name: "Altitude"
		},
		name: {
			name: "Name",
			data: "WFItemName"
		},
		longitude: {
			name: "Longitude"
		},
		country: {
			name: "Country",
			data: "country"
		},
		city: {
			name: "City",
			data: "city"
		},
		street: {
			name: "Street",
			data: "street"
		},
		url: {
			name: "URL"
		},
		latitude: {
			name: "Latitude"
		},
		zipcode: {
			name: "ZIP Code",
			data: "postalCode"
		}
	},
	WFDCMapsLinkContentItem: {
		name: {
			name: "Name",
			data: "WFItemName"
		}
	},
	WFAVAssetContentItem: {
		duration: {
			name: "Duration"
		},
		artwork: {
			name: "Artwork"
		},
		fileextension: {
			name: "File Extension",
			data: "WFFileExtensionProperty"
		},
		lastmodifieddate: {
			name: "Last Modified Date",
			data: "WFFileModificationDate"
		},
		title: {
			name: "Title",
			data: "title"
		},
		album: {
			name: "Album",
			data: "albumName"
		},
		filesize: {
			name: "File Size",
			data: "WFFileSizeProperty"
		},
		creationdate: {
			name: "Creation Date",
			data: "WFFileCreationDate"
		},
		framerate: {
			name: "Frame Rate"
		},
		artist: {
			name: "Artist",
			data: "artist"
		}
	},
	WFNumberContentItem: {
		name: {
			name: "Name",
			data: "WFItemName"
		}
	},
	WFPDFContentItem: {
		fileextension: {
			name: "File Extension",
			data: "WFFileExtensionProperty"
		},
		lastmodifieddate: {
			name: "Last Modified Date",
			data: "WFFileModificationDate"
		},
		creationdate: {
			name: "Creation Date",
			data: "WFFileCreationDate"
		},
		filesize: {
			name: "File Size",
			data: "WFFileSizeProperty"
		},
		name: {
			name: "Name",
			data: "WFItemName"
		}
	},
	WFPhoneNumberContentItem: {
		name: {
			name: "Name",
			data: "WFItemName"
		}
	},
	WFPhotoMediaContentItem: {
		filesize: {
			name: "File Size",
			data: "WFFileSizeProperty"
		},
		cameramake: {
			name: "Camera Make"
		},
		lastmodifieddate: {
			name: "Last Modified Date",
			data: "WFFileModificationDate"
		},
		fileextension: {
			name: "File Extension",
			data: "WFFileExtensionProperty"
		},
		mediatype: {
			name: "Media Type"
		},
		creationdate: {
			name: "Creation Date",
			data: "WFFileCreationDate"
		},
		location: {
			name: "Location"
		},
		album: {
			name: "Album"
		},
		phototype: {
			name: "Photo Type"
		},
		datetaken: {
			name: "Date Taken"
		},
		duration: {
			name: "Duration"
		},
		width: {
			name: "Width"
		},
		timetaken: {
			name: "Time Taken"
		},
		isascreenshot: {
			name: "Is a Screenshot"
		},
		ishidden: {
			name: "Is Hidden"
		},
		framerate: {
			name: "Frame Rate"
		},
		height: {
			name: "Height"
		},
		cameramodel: {
			name: "Camera Model"
		},
		isfavorite: {
			name: "Is Favorite"
		},
		orientation: {
			name: "Orientation"
		},
		metadatadictionary: {
			name: "Metadata Dictionary"
		}
	},
	WFMKMapItemContentItem: {
		name: {
			name: "Name",
			data: "WFItemName"
		}
	},
	WFRichTextContentItem: {
		filesize: {
			name: "File Size",
			data: "WFFileSizeProperty"
		},
		lastmodifieddate: {
			name: "Last Modified Date",
			data: "WFFileModificationDate"
		},
		creationdate: {
			name: "Creation Date",
			data: "WFFileCreationDate"
		},
		fileextension: {
			name: "File Extension",
			data: "WFFileExtensionProperty"
		},
		name: {
			name: "Name",
			data: "WFItemName"
		}
	},
	WFSafariWebPageContentItem: {
		name: {
			name: "Name",
			data: "WFItemName"
		},
		pagecontents: {
			name: "Page Contents"
		},
		pageurl: {
			name: "Page URL"
		},
		pageselection: {
			name: "Page Selection"
		}
	},
	WFURLContentItem: {
		name: {
			name: "Name",
			data: "WFItemName"
		}
	},
	WFVCardContentItem: {
		filesize: {
			name: "File Size",
			data: "WFFileSizeProperty"
		},
		creationdate: {
			name: "Creation Date",
			data: "WFFileCreationDate"
		},
		fileextension: {
			name: "File Extension",
			data: "WFFileExtensionProperty"
		},
		lastmodifieddate: {
			name: "Last Modified Date",
			data: "WFFileModificationDate"
		}
	}
} as  GetTypesData;
export default data;