package com.beedevservices.favoriteimages.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beedevservices.favoriteimages.models.Favorite;
import com.beedevservices.favoriteimages.repositories.FavoriteRepo;

@Service
public class FavoriteService {

	@Autowired
	private FavoriteRepo favoriteRepo;
	
	public List<Favorite> getAll() {
		return favoriteRepo.findAll()
;	}
	public Favorite create(Favorite newFavorite) {
		return favoriteRepo.save(newFavorite);
	}
	public Favorite getOne(Long id) {
		
		return favoriteRepo.findById(id).orElse(null);
	}
	public Favorite update(Favorite editFavorite) {
		return favoriteRepo.save(editFavorite);
	}
	public void deleteOne(Long id) {
		
		favoriteRepo.deleteById(id);
	}
}
