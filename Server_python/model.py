import matplotlib.pyplot as plt
import numpy as np
import os
import PIL
import tensorflow as tf
import matplotlib.pyplot as plt
from tensorflow import keras
from keras import layers
from keras.models import Sequential, load_model
from keras.applications.inception_v3 import preprocess_input
from keras.preprocessing.image import load_img, img_to_array
import cv2
import pathlib

class Model:
    
    def __init__(self):
        self.model = None
        
    # def predict(self, image):
    #     self.model = load_model('../server/model/test/Demo_anhCam_anhNong.model')
        
    #     if self.model is None:
    #         self.train_model()
        
    #     class_names = ["Anh cam", "Anh nong", "Anh thong thuong"]
    #     img_resized = cv2.resize(image, (180, 180))
        
    #     img_4d = np.array(img_resized).reshape(-1, 180, 180, 3)
    #     prediction = self.model.predict(img_4d)
    #     return class_names[np.argmax(prediction)]
    
    def predict(self, image):
        self.model = load_model('D:\\Document\\PTIT\\e-commerce\\Server_python\\train_model.h5')
        
        img = cv2.resize(image, (256, 256))

        i = img_to_array(img)

        i = preprocess_input(i)

        input_arr = np.array([i])

        input_arr.shape
        
        pred = np.argmax(self.model.predict(input_arr))
        
        if pred == 0:
            print("Anh cam")
            pred = 'Anh cam'
        if pred == 1:
            pred = 'Anh nong'
            print("Anh nong")
        if pred == 2:
            pred = 'Balo_vali'
            print("Balo")
        if pred == 3:
            pred = 'Sách'
            print("Book")
        if pred == 4:
            pred = 'Laptop'
            print("Laptop")
        if pred == 5:
            pred = 'Điện thoại'
            print("Smartphone")
        if pred == 6:
            pred = 'Thời trang nam'
            print("Vali")
        if pred == 7:
            pred = 'Đồng hồ_Trang sức'
            print("Watch")
        return pred
        
    
    def train_model(self):
        datadir = "../server/data/Training"
        train_ds = ["Banana", "Bycircle", "CD", "Calculator", "Computer-Mouse"]
        data_dir = pathlib.Path(datadir)
        
        img_height, img_width = 180, 180
        batch_size = 64
        train_ds = tf.keras.preprocessing.image_dataset_from_directory(
            data_dir,
            validation_split=0.2,
            subset="training",
            seed=123,
            image_size=(img_height, img_width),
            batch_size=batch_size)
        
        val_ds = tf.keras.preprocessing.image_dataset_from_directory(
            data_dir,
            validation_split=0.2,
            subset="validation",
            seed=123,
            image_size=(img_height, img_width),
            batch_size=batch_size)
        
        num_classes = 5

        self.model = Sequential([
            layers.experimental.preprocessing.Rescaling(
                1./255, input_shape=(img_height, img_width, 3)),
            layers.Conv2D(32, 3, padding='same', activation='relu'),
            layers.MaxPooling2D(),
            layers.Conv2D(64, 3, padding='same', activation='relu'),
            layers.MaxPooling2D(),
            layers.Conv2D(128, 3, padding='same', activation='relu'),
            layers.MaxPooling2D(),
            layers.Flatten(),
            layers.Dense(512, activation='relu'),
            layers.Dense(num_classes, activation='softmax')
        ])

        self.model.compile(
            optimizer='adam',
            loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
            metrics=['accuracy']
        )
        epochs = 10
        history = self.model.fit(
            train_ds,
            #steps_per_epoch=5,
            epochs=epochs,
            verbose=1,
            validation_data=val_ds,
            validation_steps=1
        )
        
        self.model.save('../server/data/v1/Object_Detection_Prj_obj.model')