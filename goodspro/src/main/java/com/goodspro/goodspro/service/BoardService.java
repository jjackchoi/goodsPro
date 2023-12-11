package com.goodspro.goodspro.service;

import java.util.List;

import com.goodspro.goodspro.dto.BoardDto;
import com.goodspro.goodspro.dto.SearchDto;
import com.goodspro.goodspro.paging.PagingResponse;

public interface BoardService {

	int insert(BoardDto boardDto);

	PagingResponse<BoardDto> findAll(SearchDto params);

	int count(SearchDto params);
	

}
