// Time zone data
const timeZones = [
    { name: 'India', timezone: 'Asia/Kolkata' },
    { name: 'United States (New York)', timezone: 'America/New_York' },
    { name: 'United States (Los Angeles)', timezone: 'America/Los_Angeles' },
    { name: 'United Kingdom (London)', timezone: 'Europe/London' },
    { name: 'Canada (Toronto)', timezone: 'America/Toronto' },
    { name: 'Australia (Sydney)', timezone: 'Australia/Sydney' },
    { name: 'Japan (Tokyo)', timezone: 'Asia/Tokyo' },
    { name: 'Germany (Berlin)', timezone: 'Europe/Berlin' },
    { name: 'China (Beijing)', timezone: 'Asia/Shanghai' },
    { name: 'Russia (Moscow)', timezone: 'Europe/Moscow' },
    { name: 'Brazil (São Paulo)', timezone: 'America/Sao_Paulo' },
    { name: 'South Africa (Johannesburg)', timezone: 'Africa/Johannesburg' },
    { name: 'Saudi Arabia (Riyadh)', timezone: 'Asia/Riyadh' },
    { name: 'Mexico (Mexico City)', timezone: 'America/Mexico_City' },
    { name: 'France (Paris)', timezone: 'Europe/Paris' },
    { name: 'Italy (Rome)', timezone: 'Europe/Rome' },
    { name: 'Argentina (Buenos Aires)', timezone: 'America/Argentina/Buenos_Aires' },
    { name: 'Nigeria (Lagos)', timezone: 'Africa/Lagos' },
    { name: 'South Korea (Seoul)', timezone: 'Asia/Seoul' },
    { name: 'Indonesia (Jakarta)', timezone: 'Asia/Jakarta' },
    { name: 'Pakistan (Karachi)', timezone: 'Asia/Karachi' },
    { name: 'Turkey (Istanbul)', timezone: 'Europe/Istanbul' },
    { name: 'Egypt (Cairo)', timezone: 'Africa/Cairo' },
    { name: 'Spain (Madrid)', timezone: 'Europe/Madrid' },
    { name: 'Iran (Tehran)', timezone: 'Asia/Tehran' },
    { name: 'Philippines (Manila)', timezone: 'Asia/Manila' },
    { name: 'Malaysia (Kuala Lumpur)', timezone: 'Asia/Kuala_Lumpur' },
    { name: 'Singapore', timezone: 'Asia/Singapore' },
    { name: 'Thailand (Bangkok)', timezone: 'Asia/Bangkok' },
    { name: 'Vietnam (Hanoi)', timezone: 'Asia/Ho_Chi_Minh' },
    { name: 'Bangladesh (Dhaka)', timezone: 'Asia/Dhaka' },
    { name: 'Sri Lanka (Colombo)', timezone: 'Asia/Colombo' },
    { name: 'Nepal (Kathmandu)', timezone: 'Asia/Kathmandu' },
    { name: 'Myanmar (Yangon)', timezone: 'Asia/Yangon' },
    { name: 'New Zealand (Auckland)', timezone: 'Pacific/Auckland' },
    { name: 'Fiji (Suva)', timezone: 'Pacific/Fiji' },
    { name: 'United Arab Emirates (Dubai)', timezone: 'Asia/Dubai' },
    { name: 'Israel (Jerusalem)', timezone: 'Asia/Jerusalem' },
    { name: 'Afghanistan (Kabul)', timezone: 'Asia/Kabul' },
    { name: 'Morocco (Casablanca)', timezone: 'Africa/Casablanca' },
    { name: 'Ghana (Accra)', timezone: 'Africa/Accra' },
    { name: 'Kenya (Nairobi)', timezone: 'Africa/Nairobi' },
    { name: 'Uganda (Kampala)', timezone: 'Africa/Kampala' },
    { name: 'Tanzania (Dar es Salaam)', timezone: 'Africa/Dar_es_Salaam' },
    { name: 'Ethiopia (Addis Ababa)', timezone: 'Africa/Addis_Ababa' },
    { name: 'Venezuela (Caracas)', timezone: 'America/Caracas' },
    { name: 'Chile (Santiago)', timezone: 'America/Santiago' },
    { name: 'Colombia (Bogotá)', timezone: 'America/Bogota' },
    { name: 'Peru (Lima)', timezone: 'America/Lima' },
    { name: 'Uruguay (Montevideo)', timezone: 'America/Montevideo' },
    { name: 'Cuba (Havana)', timezone: 'America/Havana' },
    { name: 'Puerto Rico (San Juan)', timezone: 'America/Puerto_Rico' },
    { name: 'Jamaica (Kingston)', timezone: 'America/Jamaica' },
    { name: 'Trinidad and Tobago (Port of Spain)', timezone: 'America/Port_of_Spain' },
    { name: 'Honduras (Tegucigalpa)', timezone: 'America/Tegucigalpa' },
    { name: 'El Salvador (San Salvador)', timezone: 'America/El_Salvador' },
    { name: 'Costa Rica (San José)', timezone: 'America/Costa_Rica' },
    { name: 'Panama (Panama City)', timezone: 'America/Panama' },
    { name: 'Dominican Republic (Santo Domingo)', timezone: 'America/Santo_Domingo' },
    { name: 'Haiti (Port-au-Prince)', timezone: 'America/Port-au-Prince' },
    { name: 'Iceland (Reykjavik)', timezone: 'Atlantic/Reykjavik' },
    { name: 'Greenland (Nuuk)', timezone: 'America/Godthab' },
    { name: 'Norway (Oslo)', timezone: 'Europe/Oslo' },
    { name: 'Sweden (Stockholm)', timezone: 'Europe/Stockholm' },
    { name: 'Finland (Helsinki)', timezone: 'Europe/Helsinki' },
    { name: 'Denmark (Copenhagen)', timezone: 'Europe/Copenhagen' },
    { name: 'Switzerland (Zurich)', timezone: 'Europe/Zurich' },
    { name: 'Poland (Warsaw)', timezone: 'Europe/Warsaw' },
    { name: 'Netherlands (Amsterdam)', timezone: 'Europe/Amsterdam' },
    { name: 'Belgium (Brussels)', timezone: 'Europe/Brussels' },
    { name: 'Greece (Athens)', timezone: 'Europe/Athens' },
    { name: 'Portugal (Lisbon)', timezone: 'Europe/Lisbon' },
    { name: 'Ireland (Dublin)', timezone: 'Europe/Dublin' },
    { name: 'Hungary (Budapest)', timezone: 'Europe/Budapest' },
    { name: 'Czech Republic (Prague)', timezone: 'Europe/Prague' },
    { name: 'Austria (Vienna)', timezone: 'Europe/Vienna' },
    { name: 'Romania (Bucharest)', timezone: 'Europe/Bucharest' },
    { name: 'Bulgaria (Sofia)', timezone: 'Europe/Sofia' },
    { name: 'Croatia (Zagreb)', timezone: 'Europe/Zagreb' },
    { name: 'Serbia (Belgrade)', timezone: 'Europe/Belgrade' },
    { name: 'Ukraine (Kyiv)', timezone: 'Europe/Kiev' },
    { name: 'Georgia (Tbilisi)', timezone: 'Asia/Tbilisi' },
    { name: 'Kazakhstan (Almaty)', timezone: 'Asia/Almaty' },
    { name: 'Uzbekistan (Tashkent)', timezone: 'Asia/Tashkent' },
    { name: 'Kyrgyzstan (Bishkek)', timezone: 'Asia/Bishkek' },
    { name: 'Mongolia (Ulaanbaatar)', timezone: 'Asia/Ulaanbaatar' },
    { name: 'Taiwan (Taipei)', timezone: 'Asia/Taipei' },
    { name: 'Hong Kong', timezone: 'Asia/Hong_Kong' },
    { name: 'Macau', timezone: 'Asia/Macau' },
    { name: 'Laos (Vientiane)', timezone: 'Asia/Vientiane' },
    { name: 'Cambodia (Phnom Penh)', timezone: 'Asia/Phnom_Penh' },
    { name: 'Brunei (Bandar Seri Begawan)', timezone: 'Asia/Brunei' },
    { name: 'Maldives (Malé)', timezone: 'Indian/Maldives' },
    { name: 'Seychelles (Victoria)', timezone: 'Indian/Mahe' },
    { name: 'Mauritius (Port Louis)', timezone: 'Indian/Mauritius' },
    { name: 'Madagascar (Antananarivo)', timezone: 'Indian/Antananarivo' },
    { name: 'Reunion (Saint-Denis)', timezone: 'Indian/Reunion' },
    { name: 'New Zealand (Wellington)', timezone: 'Pacific/Wellington' },
    { name: 'Tonga (Nuku\'alofa)', timezone: 'Pacific/Tongatapu' },
    { name: 'American Samoa (Pago Pago)', timezone: 'Pacific/Pago_Pago' },
    { name: 'Hawaii (Honolulu)', timezone: 'Pacific/Honolulu' },
    { name: 'Alaska (Anchorage)', timezone: 'America/Anchorage' },
    { name: 'Puerto Rico (San Juan)', timezone: 'America/Puerto_Rico' }
];

// Function to update and display India's time
function updateIndiaTime() {
    const indiaClock = document.getElementById('india-clock');
    setInterval(() => {
        const indiaTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
        indiaClock.textContent = indiaTime;
    }, 1000);
}

// Function to update and display times for all countries
function updateWorldClocks() {
    const worldClocks = document.getElementById('world-clocks');
    timeZones.forEach(zone => {
        const clockDiv = document.createElement('div');
        clockDiv.className = 'clock-box';
        clockDiv.id = zone.name.replace(/\s+/g, '-').toLowerCase();
        clockDiv.innerHTML = `<h3>${zone.name}</h3><div></div>`;
        worldClocks.appendChild(clockDiv);

        setInterval(() => {
            const zoneTime = new Date().toLocaleString('en-US', { timeZone: zone.timezone });
            clockDiv.querySelector('div').textContent = zoneTime;
        }, 1000);
    });
}
// Function to filter clocks based on search query
function filterClocks() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const clockBoxes = document.querySelectorAll('.clock-box');
    
    clockBoxes.forEach(box => {
        const clockName = box.querySelector('h3').textContent.toLowerCase();
        if (clockName.includes(query)) {
            box.style.display = '';
        } else {
            box.style.display = 'none';
        }
    });
}

// Attach event listener to search bar
document.getElementById('search-bar').addEventListener('input', filterClocks);


// Initialize clocks
updateIndiaTime();
updateWorldClocks();



