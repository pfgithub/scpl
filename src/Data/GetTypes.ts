import {
	CoercionTypeClass,
	AggrandizementPropertyName,
	AggrandizementPropertyRawName
} from "../WFTypes/Types";

export type ComparisonWFValue = 4 | 5 | 8 | 9 | 99 | 999;

export type ComparisonName =
	| "is"
	| "isnot"
	| "contains"
	| "doesnotcontain"
	| "beginswith"
	| "endswith";

export const comparisonMethodsMap = new Map<ComparisonName, ComparisonWFValue>([
	["is", 4],
	["isnot", 5],
	["contains", 99],
	["doesnotcontain", 999],
	["beginswith", 8],
	["endswith", 9]
]);

export function isComparisonMethod(method: string): method is ComparisonName {
	return comparisonMethodsMap.has(<ComparisonName>method);
}

export type GetTypeInfoProperty = {
	name: AggrandizementPropertyRawName;
	data?: string | number;
	type?: CoercionTypeClass;
	filter?: boolean;
	filterEnumValues?: string[];
};

export type GetTypeInfo = {
	comparisonMethods?: { [name in ComparisonName]?: ComparisonWFValue };
	units?: { [name: string]: number };
	properties: { [Name in AggrandizementPropertyName]?: GetTypeInfoProperty };
};
// const test: GetTypeInfo = {properties: {}, comparisonMethods: {akjndcsjklnac: 5}};

export type GetTypesData = { [Type in CoercionTypeClass]: GetTypeInfo };

// const test: GetTypesData = {fadskjhaf: a};

const data: GetTypesData = {
	WFContentItem: { properties: {} },
	WFAppStoreAppContentItem: {
		properties: {
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
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
			},
			ratingthisversion: {
				name: "Rating (This Version)"
			},
			isuniversal: {
				name: "Is Universal",
				type: "WFBooleanContentItem",
				filter: true
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
		}
	},
	WFArticleContentItem: {
		properties: {
			name: {
				name: "Name",
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
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
		}
	},
	WFBooleanContentItem: {
		comparisonMethods: { is: 4 },
		properties: {
			name: {
				name: "Name",
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
			}
		}
	},
	WFContactContentItem: {
		properties: {
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
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
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
		}
	},
	WFDateContentItem: {
		properties: {
			name: {
				name: "Name",
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
			}
		}
	},
	WFTimeLengthContentItem: {
		properties: {}
	},
	WFTimeContentItem: {
		properties: {}
	},
	WFDictionaryContentItem: {
		properties: {
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
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
			},
			fileextension: {
				name: "File Extension",
				data: "WFFileExtensionProperty"
			},
			keys: {
				name: "Keys"
			}
		}
	},
	WFEmailAddressContentItem: {
		properties: {
			name: {
				name: "Name",
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
			}
		}
	},
	WFGenericFileContentItem: {
		properties: {
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
			},
			name: {
				name: "Name",
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
			}
		}
	},
	WFImageContentItem: {
		properties: {
			width: {
				name: "Width"
			},
			timetaken: {
				name: "Time Taken"
			},
			isascreenshot: {
				name: "Is a Screenshot",
				type: "WFBooleanContentItem",
				filter: true
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
				name: "Is Hidden",
				type: "WFBooleanContentItem",
				filter: true
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
				name: "Is Favorite",
				type: "WFBooleanContentItem",
				filter: true
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
			},
			name: {
				name: "Name",
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
			}
		}
	},
	WFMPMediaContentItem: {
		properties: {
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
				data: "genre",
				type: "WFStringContentItem",
				filter: true
			},
			mediakind: {
				name: "Media Kind",
				data: "mediaType",
				type: "WFEnumerationContentItem",
				filter: true,
				filterEnumValues: [
					"Movie",
					"TV Show",
					"Music",
					"Podcast",
					"Music Video",
					"iTunes U",
					"Audiobook"
				]
			},
			name: {
				name: "Name",
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
			},
			artist: {
				name: "Artist",
				data: "artist",
				type: "WFStringContentItem",
				filter: true
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
				name: "Has Album Artwork",
				type: "WFBooleanContentItem",
				filter: true
			},
			rating: {
				name: "Rating",
				data: "rating"
			},
			isexplicit: {
				name: "Is Explicit",
				data: "isExplicit",
				type: "WFBooleanContentItem",
				filter: true
			},
			comments: {
				name: "Comments",
				data: "comments",
				type: "WFStringContentItem",
				filter: true
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
				data: "lyrics",
				type: "WFStringContentItem",
				filter: true
			},
			isclouditem: {
				name: "Is Cloud Item",
				data: "isCloudItem",
				type: "WFBooleanContentItem",
				filter: true
			},
			albumartist: {
				name: "Album Artist",
				data: "albumArtist",
				type: "WFStringContentItem",
				filter: true
			},
			album: {
				name: "Album",
				data: "albumTitle",
				type: "WFStringContentItem",
				filter: true
			}
		}
	},
	WFiTunesProductContentItem: {
		properties: {
			currencycode: {
				name: "Currency Code"
			},
			isexplicit: {
				name: "Is Explicit",
				type: "WFBooleanContentItem",
				filter: true
			},
			genre: {
				name: "Genre"
			},
			storeurl: {
				name: "Store URL"
			},
			name: {
				name: "Name",
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
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
				name: "Artist",
				type: "WFStringContentItem",
				filter: true
			},
			formattedprice: {
				name: "Formatted Price"
			},
			artwork: {
				name: "Artwork"
			},
			description: {
				name: "Description",
				type: "WFStringContentItem",
				filter: true
			},
			duration: {
				name: "Duration"
			}
		}
	},
	WFLocationContentItem: {
		properties: {
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
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
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
		}
	},
	WFDCMapsLinkContentItem: {
		properties: {
			name: {
				name: "Name",
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
			}
		}
	},
	WFAVAssetContentItem: {
		properties: {
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
				data: "title",
				type: "WFStringContentItem",
				filter: true
			},
			album: {
				name: "Album",
				data: "albumName",
				type: "WFStringContentItem",
				filter: true
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
				data: "artist",
				type: "WFStringContentItem",
				filter: true
			},
			name: {
				name: "Name",
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
			}
		}
	},
	WFNumberContentItem: {
		properties: {
			name: {
				name: "Name",
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
			}
		}
	},
	WFStringContentItem: {
		comparisonMethods: {
			is: 4,
			isnot: 5,
			contains: 99,
			doesnotcontain: 999,
			beginswith: 8,
			endswith: 9
		},
		properties: {
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
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
			}
		}
	},
	WFPDFContentItem: {
		properties: {
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
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
			}
		}
	},
	WFPhoneNumberContentItem: {
		properties: {
			name: {
				name: "Name",
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
			}
		}
	},
	WFPhotoMediaContentItem: {
		properties: {
			filesize: {
				name: "File Size",
				data: "WFFileSizeProperty",
				filter: false
			},
			cameramake: {
				name: "Camera Make",
				filter: false
			},
			lastmodifieddate: {
				name: "Last Modified Date",
				data: "WFFileModificationDate",
				type: "WFDateContentItem",
				filter: true
			},
			fileextension: {
				name: "File Extension",
				data: "WFFileExtensionProperty",
				type: "WFStringContentItem",
				filter: true
			},
			mediatype: {
				name: "Media Type",
				type: "WFEnumerationContentItem",
				filter: true,
				filterEnumValues: ["Image", "Video", "Audio"]
			},
			creationdate: {
				name: "Creation Date",
				data: "WFFileCreationDate",
				type: "WFDateContentItem",
				filter: true
			},
			location: {
				name: "Location",
				filter: false
			},
			album: {
				name: "Album",
				type: "WFStringContentItem",
				filter: true
			},
			phototype: {
				name: "Photo Type",
				type: "WFEnumerationContentItem",
				filter: true,
				filterEnumValues: ["HDR", "Panorama", "Burst", "Live Photo"]
			},
			datetaken: {
				name: "Date Taken",
				type: "WFDateContentItem",
				filter: true
			},
			duration: {
				name: "Duration",
				type: "WFTimeLengthContentItem",
				filter: true
			},
			width: {
				name: "Width",
				type: "WFNumberContentItem",
				filter: true
			},
			timetaken: {
				name: "Time Taken",
				type: "WFTimeContentItem",
				filter: true
			},
			isascreenshot: {
				name: "Is a Screenshot",
				type: "WFBooleanContentItem",
				filter: true
			},
			ishidden: {
				name: "Is Hidden",
				type: "WFBooleanContentItem",
				filter: true
			},
			framerate: {
				name: "Frame Rate",
				type: "WFNumberContentItem",
				filter: true
			},
			height: {
				name: "Height",
				type: "WFNumberContentItem",
				filter: true
			},
			cameramodel: {
				name: "Camera Model",
				filter: false
			},
			isfavorite: {
				name: "Is Favorite",
				type: "WFBooleanContentItem",
				filter: true
			},
			orientation: {
				name: "Orientation",
				type: "WFEnumerationContentItem",
				filter: true,
				filterEnumValues: [
					"Up",
					"Down",
					"Left",
					"Right",
					"Up Mirrored",
					"Down Mirrored",
					"Left Mirrored",
					"Right Mirrored"
				]
			},
			metadatadictionary: {
				name: "Metadata Dictionary",
				filter: false
			},
			name: {
				name: "Name",
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
			}
		}
	},
	WFMKMapItemContentItem: {
		properties: {
			name: {
				name: "Name",
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
			}
		}
	},
	WFRichTextContentItem: {
		properties: {
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
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
			}
		}
	},
	WFSafariWebPageContentItem: {
		properties: {
			name: {
				name: "Name",
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
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
		}
	},
	WFURLContentItem: {
		properties: {
			name: {
				name: "Name",
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
			}
		}
	},
	WFVCardContentItem: {
		properties: {
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
			},
			name: {
				name: "Name",
				data: "WFItemName",
				type: "WFStringContentItem",
				filter: true
			}
		}
	},
	WFEnumerationContentItem: {
		comparisonMethods: { is: 4, isnot: 5 },
		properties: {}
	},
	WFCalendarEventContentItem: {
		properties: {
			attendees: { name: "Attendees" },
			calendar: { name: "Calendar" },
			creationdate: { name: "Creation Date" },
			duration: { name: "Duration" },
			fileextension: { name: "File Extension" },
			filesize: { name: "File Size" },
			hasalarms: { name: "Has Alarms" },
			isallday: { name: "Is All Day" },
			lastmodifieddate: { name: "Last Modified Date" },
			location: { name: "Location" },
			name: { name: "Name" },
			notes: { name: "Notes" },
			organizer: { name: "Organizer" },
			startdate: { name: "Start Date" },
			title: { name: "Title" },
			url: { name: "URL" }
		}
	}
};

//console.log(JSON.stringify([...new Set(         )].sort().reduce((total, o) => {Object.assign(total, {[o.toLowerCase().replace(/[^a-z0-9]+/g, "")]: {name: o}}); return total;}, {})));
export default data;
