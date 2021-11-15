import React, {useState, useEffect, Component} from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';


export default function KakaoMap(props){
    //props.univ.name => 목표 대학교 한글 이름
    //props.univ.title => 대학교 영문
    //props.univ.address => 지도 중심으로 설정할 도로명 주소
    //props.univ.lng
    //props.univ.lat

    //props.restaurant => 식당 좌표 배열
    //props.restaurant[idx].title => 식당 이름
    //props.restaurant[idx].xcoord => 경도
    //props.restaurant[idx].ycoord => 위도
    const [info, setInfo] = useState()
    const [markers, setMarkers] = useState([])
    const [map, setMap] = useState()
  
    const [centerPos, setCenterPos] = useState({x: !props.univ.lng?126.9786567:props.univ.lng, y: !props.univ.lat?37.566826:props.univ.lat});
    
    useEffect(()=>{
      setCenterPos({x: !props.univ.lng?126.9786567:props.univ.lng, y: !props.univ.lat?37.566826:props.univ.lat});
    }, [props.univ])

    useEffect(()=>{
      if (!map) return
      const bounds = new window.kakao.maps.LatLngBounds()
      let markers = []
      bounds.extend(new window.kakao.maps.LatLng(centerPos.y, centerPos.x));
      markers.push({
        position: {
          lat: centerPos.y,
          lng: centerPos.x,
        },
        content: props.univ.name,
      });
      props.restaurants.forEach((elem)=>{
        bounds.extend(new window.kakao.maps.LatLng(elem.y, elem.x));
        markers.push({
          position: {
            lat: elem.y,
            lng: elem.x
          },
          content: elem.title,
        });        
      })
      setMarkers(markers);
      map.setBounds(bounds);
    }, [props.restaurants, props.univ])

    

    useEffect(() => {
      if (!map) return
      const bounds = new window.kakao.maps.LatLngBounds()
      let markers = []
      //타겟 대학교 지도에 표시
      bounds.extend(new window.kakao.maps.LatLng(centerPos.y, centerPos.x));
      markers.push({
        position: {
          lat: centerPos.y,
          lng: centerPos.x,
        },
        content: props.univ.name,
      });
      setMarkers(markers);
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      map.setBounds(bounds);
    }, [map]);



    return (
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: centerPos.x, //37.566826,
          lng: centerPos.y //126.9786567,
        }}
        style={{
          width: "100%",
          height: "350px",
        }}
        level={3}
        onCreate={setMap}
      >
        
        {markers.map((marker) => (

          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info &&info.content === marker.content && (
              <div style={{color:"#000"}}>{marker.content}</div>
            )}
          </MapMarker>
        ))}
      </Map>
    )
}