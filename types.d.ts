interface Address {
    AddressId: number;
    Latitude: string;
    Longitude: string;
    StreetAddress1: string;
    SuburbId: number;
}

interface Suburb { 
    SuburbId: number;
    Name: string;
}

interface Postcode { 
    PostcodeId: number;
    Code: string;
}

interface State { 
    StateId: number;
    Name: string;
}

interface Country {
    CountryId: number;
    Name: string;
}

interface FacilityStaffedHour {
    FacilityStaffedHourId: number;
    MondayFrom: string;
    MondayTo: string;
    TuesdayFrom: string;
    TuesdayTo: string;
    WednesdayFrom: string;
    WednesdayTo: string;
    ThursdayFrom: string;
    ThursdayTo: string;
    FridayFrom: string;
    FridayTo: string;
    SaturdayFrom: string;
    SaturdayTo: string;
    SundayFrom: string;
    SundayTo: string;
}

interface Region {
    RegionId: number;
    Name: string;
}

interface Service {
    ServiceId: number;
    ServiceName: string;
    ServiceType: string;
    FacilityId: number;
}

interface Activity {
    ActivityId: number;
    ActivityName: string;
    IconFileName: string;
    PinIconFileName: string;
    FacilityId: number;   
}

interface Facility {
    FacilityId: number;
    Name: string;
    Address: Address;
    Suburb: Suburb;
    Postcode: Postcode;
    State: State;
    Country: Country;
    FacilityPhoneNumber: string;
    IsAccessCard: boolean;
    AccessCardFee: string;
    Is24Hour: boolean;
    IsStaffedHour: boolean;
    FacilityStaffedHour: FacilityStaffedHour;
    WebsiteUrl: string;
    Region: Region;
    IconUrl: string;
    ServicesList: string;
    Services: Service[];
    Activities: Activity[];
    FacilityStatusId: number;
    NoNewMembersDate: string;
    AdditionalInfo: string;
}

export interface FacilityMap {
    Data: Facility[];
}