import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet, { popup } from 'leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';



const mapIcon = new Leaflet.Icon({
	iconUrl: mapMarkerImg,

	iconSize: [58, 68],
	iconAnchor: [29, 68],
	popupAnchor: [170, 2]
})

function OrphanageMap() {
	return (
		<div id="page-map">
			<aside>
				<header>
					<img src={mapMarkerImg} alt="" />
					<h2>Escolha um orfanato no mapa</h2>
					<p>Muitas crianças estão esperando a sua visita :)</p>
				</header>

				<footer>
					<strong>Vila Velha</strong>
					<span>Espirito Santo</span>
				</footer>
			</aside>

			<Map
				center={[-20.3554816, -40.3243008]}
				zoom={15}
				style={{ width: '100%', height: '100%' }}
			>
				{/*<TileLayer url= "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}
				<TileLayer
					url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
				/>

				<Marker
					icon={mapIcon}
					position={[-20.3554816, -40.3243008]}
				>
					<Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
						Lar das meninas
						<Link to="/orphanages/1">
							<FiArrowRight size={20} color="#FFF" />
						</Link>
					</Popup>
				</Marker>
			</Map>

			<Link to="/orphanages/create" className="create-orphanage">
				<FiPlus size={32} color="#FFF" />
			</Link>
		</div>
	);
}


export default OrphanageMap;