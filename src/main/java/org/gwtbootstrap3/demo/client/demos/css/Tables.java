package org.gwtbootstrap3.demo.client.demos.css;

/*
 * #%L
 * GwtBootstrap3
 * %%
 * Copyright (C) 2013 GwtBootstrap3
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import org.gwtbootstrap3.client.ui.Row;

/**
 * @author Joshua Godi
 */
public class Tables extends Composite {
    interface TablesUiBinder extends UiBinder<Row, Tables> {
    }

    private static final TablesUiBinder ourUiBinder = GWT.create(TablesUiBinder.class);

    public Tables() {
        initWidget(ourUiBinder.createAndBindUi(this));
    }
}
