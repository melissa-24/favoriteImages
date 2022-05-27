import re
from app import app
from flask import Flask, render_template, redirect, session, request, flash, jsonify
from app.models.favorite import Favorite
from app.models.user import User


