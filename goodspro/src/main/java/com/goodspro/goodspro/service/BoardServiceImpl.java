package com.goodspro.goodspro.service;

import java.util.List;


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
	public List<BoardDto> findAll() {
		return sqlSession.selectList("BoardMapper.findAll");
	}
}
