import React, {useState, useEffect} from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function KakaoMap({props}){
    //props.name => 목표 대학교 한글 이름
    //props.title => 대학교 영문
    //props.address => 지도 중심으로 설정할 도로명 주소
    //props.lng
    //props.lat

    const [info, setInfo] = useState()
    const [markers, setMarkers] = useState([])
    const [map, setMap] = useState()
  
    const [centerPos, setCenterPos] = useState({x: !props.lng?126.9786567:props.lng, y: !props.lat?37.566826:props.lat});

    
    useEffect(() => {


      if (!map) return
      const ps = new window.kakao.maps.services.Places()

      ps.keywordSearch(`${props.name} 주변 맛집`, (data, status, _pagination) => {

          console.log(data);//
          //해당 페이지로 이동하는 함수 -> _pagination.gotoPage(2);
          //console.log(_pagination);//
          //_pagination.gotoPage(3);

        if (status === window.kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          const bounds = new window.kakao.maps.LatLngBounds()
          let markers = []
          

          //타겟 대학교 지도에 표시
          bounds.extend(new window.kakao.maps.LatLng(centerPos.y, centerPos.x));
          markers.push({
            position: {
              lat: centerPos.y,
              lng: centerPos.x,
            },
            content: props.name,
          });
          //

          for (var i = 0; i < data.length; i++) {
            // @ts-ignore
            markers.push({
              position: {
                lat: data[i].y,
                lng: data[i].x,
              },
              content: data[i].place_name + data[i].road_address_name,
            })
            // @ts-ignore
            bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x))
          }
          setMarkers(markers)
  
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds)
        }
      })
    }, [map])

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