package com.goodspro.goodspro.service;

import java.util.List;

import com.goodspro.goodspro.dto.BoardDto;

public interface BoardService {

	int insert(BoardDto boardDto);
	
	List<BoardDto> findAll();
	

}
