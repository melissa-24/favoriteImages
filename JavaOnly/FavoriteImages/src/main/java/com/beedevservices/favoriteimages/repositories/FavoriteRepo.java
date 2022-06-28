package com.beedevservices.favoriteimages.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.beedevservices.favoriteimages.models.Favorite;

@Repository
public interface FavoriteRepo extends CrudRepository<Favorite, Long> {
	List<Favorite> findAll();
}
