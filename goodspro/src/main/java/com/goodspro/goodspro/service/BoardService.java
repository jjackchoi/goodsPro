package com.goodspro.goodspro.service;

import java.util.List;

import com.goodspro.goodspro.dto.BoardDto;
import com.goodspro.goodspro.dto.SearchDto;

public interface BoardService {

	int insert(BoardDto boardDto);
	
	List<BoardDto> findAll(SearchDto params);

	int count(SearchDto params);
	

}
