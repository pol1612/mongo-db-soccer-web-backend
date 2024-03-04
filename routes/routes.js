import express from 'express'

const router = express.Router();

import SoccerPlayerModel from '../models/model.js';
import { player_add, player_delete, player_get, player_update, players_index } from '../controllers/soccer-players-controller.js';

// List all players
router.get('/soccer_players', players_index);

// View one player by id
router.get('/soccer_players/:id', player_get);

// Add one new player
router.post('/soccer_players', player_add);

// Update one player's document
router.put('/soccer_players/:id',player_update);

// Delete one player's document
router.delete('/soccer_players/:id', player_delete);

export default router;