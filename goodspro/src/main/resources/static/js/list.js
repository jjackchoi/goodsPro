/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
//
/*<![CDATA[*/
    window.onload = () => {
        // 페이지가 로드되었을 때, 딱 한 번만 함수를 실행
        findAllPost();
    }

    // 게시글 리스트 조회
    function findAllPost(){

        // 1. PagingResponse의 멤버인 List<T> 타입의 list를 의미
        const list = [[ ${response.list} ]];
        console.log(list);
        // 2. 리스트가 비어있는 경우, 행에 "검색 결과가 없다"는 메세지를 출력하고, 페이지 번호(페이지네이션) HTML을 제거(초기화)한 후 로직을 종료
        if ( !list.length) {
            document.getElementById('list').innerHTML = '<td colspan="6"><div className="no_data_msg">검색된 결과가 없습니다.</div><td>';
            drawPage();
        }

        // 3. PagingResponse의 멤버인 pagination을 의미
        const pagination = [[ ${response.pagination} ]];
        console.log(pagination);
        // 4. @ModelAttribute를 이용하여 뷰(HTML)로 전달한 SearchDto 타입의 객체인 params를 의미
        const params = [[ ${params} ]];
        console.log(params);

        // 5. 리스트에 출력되는 게시글 번호를 처리하기 위해 사용되는 변수 (리스트에서 번호는 페이지 정보를 이용해서 계산해야 함)
        let num = pagination.totalRecordCount - ((params.page - 1) * params.recordSize);

        // 6. 리스트 데이터 렌더링
        drawList(list, num);

        // 7. 페이지 번호 렌더링
        drawPage(pagination, params);
    }

    // 리스트 HTML draw
    function drawList(list, num){

        // 1. 렌더링 할 HTML을 저장할 변수
        let html = '';

        /*
         * 2. 기존에 타임리프를 이용해서 리스트 데이터를 그리던 것과 유사한 로직
         *    기존에는 게시글 번호를 (전체 데이터 수 - loop의 인덱스 번호)로 처리했으나,
         *    현재는 (전체 데이터 수 - ((현재 페이지 번호 -1) * 페이지당 출력할 데이터 개수))로 정밀히 계산
         */
         list.forEach(row -> {
            html += `
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>${row.boardTitle}</td>
                    <td>${row.boardContent}</td>
                    <td>${dayjs(row.regDatetime).format('YYYY-MM-DD HH:mm')}</td>
                </tr>
            `;
         })

         // 3. id가 "list"인 요소를 찾아 HTML을 렌더링
         document.getElementById('list').innerHTML = html;


    }
/*]]>*/
