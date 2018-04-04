package com.bitcamp.web.service;

import java.util.HashMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.bitcamp.web.domain.Command;
import com.bitcamp.web.mapper.Mapper;

@Service
public class TxService implements ITXService{
	@Autowired Mapper mapper;
	@Autowired Command cmd;
	@Override @Transactional
	public Object withdraw(HashMap<?, ?> param) {
		mapper.exist(cmd);
		mapper.insertMember(cmd);
		mapper.searchAdminById(param);
		return null;
	}
	@Override
	public Object withdraw2(HashMap<?, ?> param) {
		return null;
	}
}
