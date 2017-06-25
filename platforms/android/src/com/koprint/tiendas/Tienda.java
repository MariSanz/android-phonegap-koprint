package com.koprint.tiendas;

import com.google.android.gms.maps.model.LatLng;

import java.io.Serializable;

/**
 * Created by adeka on 25/06/2017.
 */

public class Tienda {
    private String nombre;
    private String direccion;
    private LatLng coordenadas;

    public Tienda(String nombre, String direccion, LatLng coordenadas) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.coordenadas = coordenadas;
    }

    public String getNombre() {
        return nombre;
    }

    public String getDireccion() {
        return direccion;
    }

    public LatLng getCoordenadas() {
        return coordenadas;
    }
}
