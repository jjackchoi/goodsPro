package com.goodspro.goodspro.service;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.goodspro.goodspro.boardDto.BoardDto;


@Service
public class BoardServiceImpl implements BoardService{
	
	@Autowired
	SqlSession sqlSession;
	
	@Override
	public int insert(BoardDto boardDto) {
		
		return sqlSession.insert("com.example.demo.mapper.BoardMapper.insert");
	}

}
