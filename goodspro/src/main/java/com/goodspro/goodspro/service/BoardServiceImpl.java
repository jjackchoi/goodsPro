package com.goodspro.goodspro.service;

import java.util.Collections;
import java.util.List;


import com.goodspro.goodspro.dto.SearchDto;
import com.goodspro.goodspro.paging.Pagination;
import com.goodspro.goodspro.paging.PagingResponse;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.goodspro.goodspro.dto.BoardDto;


@Service
public class BoardServiceImpl implements BoardService{
	
	@Autowired
	SqlSession sqlSession;
	
	@Override
	public int insert(BoardDto boardDto) {
		return sqlSession.insert("BoardMapper.insert",boardDto);
	}

	@Override
	public PagingResponse<BoardDto> findAll(final SearchDto params) {

		// 조건에 해당하는 데이터가 없는 경우, 응답 데이터에 비어있는 리스트와 null을 담아 반환
		int count = sqlSession.selectOne("BoardMapper.count",params);
		if (count < 1){
			return new PagingResponse<>(Collections.emptyList(), null);
		}

		// Pagination 객체를 생성해서 페이지 정보 계산 후 SearchDto 타입의 객체인 params에 계산된 페이지 정보 저장
		Pagination pagination = new Pagination(count, params);
		params.setPagination(pagination);

		// 계산된 페이지 정보의 일부(limitStart, recordSize)를 기준으로 리스트 데이터 조회 후 응답 데이터 반환
		List<BoardDto> list = sqlSession.selectList("BoardMapper.findAll", params);
		return new PagingResponse<>(list, pagination);
	}

	@Override
	public int count(SearchDto params) {
		return sqlSession.selectOne("BoardMapper.count",params);
	}
}
