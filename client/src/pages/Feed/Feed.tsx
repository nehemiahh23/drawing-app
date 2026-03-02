import Post from "../../components/Post.js"
import "./feed.css"

const data = {
    "page": 1,
    "per_page": 12,
    "photos": [
        {
            "id": 34935442,
            "width": 3648,
            "height": 5472,
            "url": "https://www.pexels.com/photo/majestic-alpine-mountain-with-winter-pines-34935442/",
            "photographer": "eberhard grossgasteiger",
            "photographer_url": "https://www.pexels.com/@eberhardgross",
            "photographer_id": 121938,
            "avg_color": "#7C7771",
            "src": {
                "original": "https://images.pexels.com/photos/34935442/pexels-photo-34935442.jpeg",
                "large2x": "https://images.pexels.com/photos/34935442/pexels-photo-34935442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/34935442/pexels-photo-34935442.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/34935442/pexels-photo-34935442.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/34935442/pexels-photo-34935442.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/34935442/pexels-photo-34935442.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/34935442/pexels-photo-34935442.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/34935442/pexels-photo-34935442.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": "Snow-capped mountain peak towering above a serene forest in winter."
        },
        {
            "id": 35408818,
            "width": 3912,
            "height": 5868,
            "url": "https://www.pexels.com/photo/bustling-city-street-in-chongqing-at-dusk-35408818/",
            "photographer": "Liuuu _61",
            "photographer_url": "https://www.pexels.com/@liuuu-_61-2383408",
            "photographer_id": 2383408,
            "avg_color": "#70756F",
            "src": {
                "original": "https://images.pexels.com/photos/35408818/pexels-photo-35408818.jpeg",
                "large2x": "https://images.pexels.com/photos/35408818/pexels-photo-35408818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/35408818/pexels-photo-35408818.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/35408818/pexels-photo-35408818.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/35408818/pexels-photo-35408818.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/35408818/pexels-photo-35408818.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/35408818/pexels-photo-35408818.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/35408818/pexels-photo-35408818.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": "High angle view of a busy city street scene in Chongqing, China during dusk with vibrant traffic motion."
        },
        {
            "id": 35738382,
            "width": 3118,
            "height": 4677,
            "url": "https://www.pexels.com/photo/serene-woman-gazing-at-sunset-from-balcony-35738382/",
            "photographer": "Khả Huy Lý Lâm",
            "photographer_url": "https://www.pexels.com/@kh-huy-ly-lam-2159008331",
            "photographer_id": 2159008331,
            "avg_color": "#6A5E52",
            "src": {
                "original": "https://images.pexels.com/photos/35738382/pexels-photo-35738382.jpeg",
                "large2x": "https://images.pexels.com/photos/35738382/pexels-photo-35738382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/35738382/pexels-photo-35738382.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/35738382/pexels-photo-35738382.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/35738382/pexels-photo-35738382.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/35738382/pexels-photo-35738382.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/35738382/pexels-photo-35738382.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/35738382/pexels-photo-35738382.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": "A woman gazes at sunset from a serene balcony, creating a peaceful silhouette."
        },
        {
            "id": 35671578,
            "width": 5152,
            "height": 7728,
            "url": "https://www.pexels.com/photo/stylish-modern-cafe-interior-with-bar-stools-35671578/",
            "photographer": "Ilia Bronskiy",
            "photographer_url": "https://www.pexels.com/@ilia-bronskiy-1137858493",
            "photographer_id": 1137858493,
            "avg_color": "#6A6D62",
            "src": {
                "original": "https://images.pexels.com/photos/35671578/pexels-photo-35671578.jpeg",
                "large2x": "https://images.pexels.com/photos/35671578/pexels-photo-35671578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/35671578/pexels-photo-35671578.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/35671578/pexels-photo-35671578.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/35671578/pexels-photo-35671578.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/35671578/pexels-photo-35671578.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/35671578/pexels-photo-35671578.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/35671578/pexels-photo-35671578.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": ""
        },
        {
            "id": 33622473,
            "width": 4910,
            "height": 3273,
            "url": "https://www.pexels.com/photo/scenic-view-of-bow-bridge-in-central-park-nyc-33622473/",
            "photographer": "Artūras Kokorevas",
            "photographer_url": "https://www.pexels.com/@kokorevas",
            "photographer_id": 26708,
            "avg_color": "#41564D",
            "src": {
                "original": "https://images.pexels.com/photos/33622473/pexels-photo-33622473.jpeg",
                "large2x": "https://images.pexels.com/photos/33622473/pexels-photo-33622473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/33622473/pexels-photo-33622473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/33622473/pexels-photo-33622473.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/33622473/pexels-photo-33622473.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/33622473/pexels-photo-33622473.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/33622473/pexels-photo-33622473.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/33622473/pexels-photo-33622473.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": "A picturesque scene of Bow Bridge with people and a boat in Central Park, New York City."
        },
        {
            "id": 35702301,
            "width": 4000,
            "height": 6000,
            "url": "https://www.pexels.com/photo/misty-forest-landscape-in-italy-35702301/",
            "photographer": "鼓 舞",
            "photographer_url": "https://www.pexels.com/@kobu7",
            "photographer_id": 2158956921,
            "avg_color": "#797B7A",
            "src": {
                "original": "https://images.pexels.com/photos/35702301/pexels-photo-35702301.jpeg",
                "large2x": "https://images.pexels.com/photos/35702301/pexels-photo-35702301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/35702301/pexels-photo-35702301.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/35702301/pexels-photo-35702301.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/35702301/pexels-photo-35702301.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/35702301/pexels-photo-35702301.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/35702301/pexels-photo-35702301.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/35702301/pexels-photo-35702301.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": "Free stock photo of natures"
        },
        {
            "id": 35619584,
            "width": 3024,
            "height": 4032,
            "url": "https://www.pexels.com/photo/scenic-view-of-baltic-sea-from-cliffside-deck-35619584/",
            "photographer": "Vlada Juravliov",
            "photographer_url": "https://www.pexels.com/@vlada-juravliov-2158823398",
            "photographer_id": 2158823398,
            "avg_color": "#616765",
            "src": {
                "original": "https://images.pexels.com/photos/35619584/pexels-photo-35619584.jpeg",
                "large2x": "https://images.pexels.com/photos/35619584/pexels-photo-35619584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/35619584/pexels-photo-35619584.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/35619584/pexels-photo-35619584.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/35619584/pexels-photo-35619584.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/35619584/pexels-photo-35619584.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/35619584/pexels-photo-35619584.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/35619584/pexels-photo-35619584.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": "Breathtaking view of the Baltic Sea from a wooden deck with pine trees in the foreground."
        },
        {
            "id": 35657334,
            "width": 3514,
            "height": 5271,
            "url": "https://www.pexels.com/photo/charming-bakery-shopfront-in-st-ives-england-35657334/",
            "photographer": "the_literate_traveller _",
            "photographer_url": "https://www.pexels.com/@the_literate_traveller-_-550495759",
            "photographer_id": 550495759,
            "avg_color": "#5B534A",
            "src": {
                "original": "https://images.pexels.com/photos/35657334/pexels-photo-35657334.png",
                "large2x": "https://images.pexels.com/photos/35657334/pexels-photo-35657334.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/35657334/pexels-photo-35657334.png?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/35657334/pexels-photo-35657334.png?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/35657334/pexels-photo-35657334.png?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/35657334/pexels-photo-35657334.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/35657334/pexels-photo-35657334.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/35657334/pexels-photo-35657334.png?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": "Free stock photo of artisan bakery, baked goods, english town"
        },
        {
            "id": 35640923,
            "width": 3648,
            "height": 5472,
            "url": "https://www.pexels.com/photo/woman-relaxing-outdoors-on-a-chair-in-lisboa-park-35640923/",
            "photographer": "Rubiana Cardoso",
            "photographer_url": "https://www.pexels.com/@rubiana-cardoso-2158857118",
            "photographer_id": 2158857118,
            "avg_color": "#5C5038",
            "src": {
                "original": "https://images.pexels.com/photos/35640923/pexels-photo-35640923.jpeg",
                "large2x": "https://images.pexels.com/photos/35640923/pexels-photo-35640923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/35640923/pexels-photo-35640923.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/35640923/pexels-photo-35640923.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/35640923/pexels-photo-35640923.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/35640923/pexels-photo-35640923.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/35640923/pexels-photo-35640923.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/35640923/pexels-photo-35640923.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": "A woman in a brown jacket sits comfortably on a chair in a park in Lisboa, Portugal."
        },
        {
            "id": 6899388,
            "width": 4064,
            "height": 3200,
            "url": "https://www.pexels.com/photo/red-shelves-near-door-in-office-6899388/",
            "photographer": "Max Vakhtbovych",
            "photographer_url": "https://www.pexels.com/@artbovich",
            "photographer_id": 3871980,
            "avg_color": "#923538",
            "src": {
                "original": "https://images.pexels.com/photos/6899388/pexels-photo-6899388.jpeg",
                "large2x": "https://images.pexels.com/photos/6899388/pexels-photo-6899388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/6899388/pexels-photo-6899388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/6899388/pexels-photo-6899388.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/6899388/pexels-photo-6899388.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/6899388/pexels-photo-6899388.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/6899388/pexels-photo-6899388.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/6899388/pexels-photo-6899388.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": "Interior of modern office with red door next to empty shelves near wall"
        },
        {
            "id": 32236360,
            "width": 6048,
            "height": 4032,
            "url": "https://www.pexels.com/photo/romantic-couple-kissing-with-blurred-motion-32236360/",
            "photographer": "Khoa Võ",
            "photographer_url": "https://www.pexels.com/@khoa-vo-2347168",
            "photographer_id": 2347168,
            "avg_color": "#4F4B48",
            "src": {
                "original": "https://images.pexels.com/photos/32236360/pexels-photo-32236360.jpeg",
                "large2x": "https://images.pexels.com/photos/32236360/pexels-photo-32236360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/32236360/pexels-photo-32236360.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/32236360/pexels-photo-32236360.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/32236360/pexels-photo-32236360.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/32236360/pexels-photo-32236360.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/32236360/pexels-photo-32236360.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/32236360/pexels-photo-32236360.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": "Artistic photo of a couple kissing at night with a dynamic blurred effect, capturing motion and emotion."
        },
        {
            "id": 17117518,
            "width": 3456,
            "height": 4608,
            "url": "https://www.pexels.com/photo/orange-door-with-a-crash-bar-17117518/",
            "photographer": "Lukman Hakim",
            "photographer_url": "https://www.pexels.com/@lukman-hakim-385495290",
            "photographer_id": 385495290,
            "avg_color": "#594125",
            "src": {
                "original": "https://images.pexels.com/photos/17117518/pexels-photo-17117518.jpeg",
                "large2x": "https://images.pexels.com/photos/17117518/pexels-photo-17117518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "large": "https://images.pexels.com/photos/17117518/pexels-photo-17117518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "medium": "https://images.pexels.com/photos/17117518/pexels-photo-17117518.jpeg?auto=compress&cs=tinysrgb&h=350",
                "small": "https://images.pexels.com/photos/17117518/pexels-photo-17117518.jpeg?auto=compress&cs=tinysrgb&h=130",
                "portrait": "https://images.pexels.com/photos/17117518/pexels-photo-17117518.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                "landscape": "https://images.pexels.com/photos/17117518/pexels-photo-17117518.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
                "tiny": "https://images.pexels.com/photos/17117518/pexels-photo-17117518.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
            },
            "liked": false,
            "alt": "Photograph of an orange door with crash bar in a dimly lit indoor setting, emphasizing its modern design."
        }
    ],
    "total_results": 60455,
    "next_page": "https://api.pexels.com/v1/curated?page=2&per_page=12"
}

function Feed() {
  return (
	<main>
		{ data.photos.map(p => <Post src={p.src.original} alt={p.alt} author={p.photographer} />) }
	</main>
  )
}
export default Feed