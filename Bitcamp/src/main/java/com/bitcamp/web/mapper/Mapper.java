package com.bitcamp.web.mapper;

import java.util.HashMap;
import java.util.List;
import org.springframework.stereotype.Repository;
import com.bitcamp.web.domain.Board;
import com.bitcamp.web.domain.Command;
import com.bitcamp.web.domain.Image;
import com.bitcamp.web.domain.Member;

@Repository
public interface Mapper {
	public void insertMember(Command cmd);
	public void addImage(Image image);
	public void updateMember(Member member);
	public void deleteMember(Command cmd);
	public List<Member> selectAll(Command cmd);
	public List<Member> selectByName(Command cmd);
	public List<Member> selectById(Command cmd);
	public List<Board> articles(Command cmd);
	public Member selectMemberById(Command cmd);
	public HashMap<String, String> searchMemberById(HashMap<?,?> map);
	public Member searchAdminById(HashMap<?,?> map);
	public int selectCount(Command cmd);
	public int exist(Command cmd);
	public int existArticles(Command cmd);
	public int existAdmin(Command cmd);
	public HashMap<String, String> searchAll(HashMap<?,?> map);
}
